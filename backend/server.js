const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { OpenAI } = require('openai')

// Load environment variables
dotenv.config()

const app = express()

// Enable CORS for all routes
app.use(cors())
app.use(express.json())

// Initialize OpenAI with OpenRouter configuration
let currentMaxTokens = 650 // Initial token limit that we'll adjust dynamically

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: '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',
  defaultHeaders: {
    'HTTP-Referer': 'http://localhost:3001', // Your local development URL
    'X-Title': 'StoryBot', // Your application name
  },
  maxTokens: currentMaxTokens
})

// Function to extract available tokens from error message
function extractAvailableTokens(errorMessage) {
  const match = errorMessage.match(/can only afford (\d+)/)
  return match ? parseInt(match[1]) : null
}

// Basic health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' })
})

app.post('/generate-story', async (req, res) => {
  try {
    const {
      childName,
      age,
      interests,
      learningGoals,
      emotions
    } = req.body

    if (!childName || !age) {
      return res.status(400).json({ error: 'Child name and age are required' })
    }

    const prompt = `Create a bedtime story for a ${age} year old child named ${childName}. 
    ${interests ? `The child is interested in: ${interests}.` : ''}
    ${learningGoals ? `The story should teach about: ${learningGoals}.` : ''}
    ${emotions ? `The child is currently feeling: ${emotions}.` : ''}
    Make the story engaging, age-appropriate, and include a positive message. 
    Keep the story between 500-800 words.`

    console.log('Sending request to OpenRouter with prompt:', prompt)

    let retryCount = 0
    const maxRetries = 3

    while (retryCount < maxRetries) {
      try {
        const completion = await openai.chat.completions.create({
          model: "anthropic/claude-2",
          messages: [
            {
              role: "system",
              content: "You are a creative children's story writer who creates engaging, age-appropriate bedtime stories. Keep responses concise."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: currentMaxTokens,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0
        })

        // Check if we received an error response
        if (completion.error) {
          throw completion.error;
        }

        console.log('Received response from OpenRouter:', JSON.stringify(completion, null, 2))

        if (!completion.choices || !completion.choices.length) {
          throw new Error('No response received from the API')
        }

        const story = completion.choices[0].message.content
        
        if (!story) {
          throw new Error('No story content in the response')
        }

        const cleanedStory = story.replace(/^(Here is a|This is a|Here's a).*?word bedtime story:?\s*/i, '').trim()
        return res.json({ story: cleanedStory })

      } catch (error) {
        console.log('Caught error:', error.message || error);
        
        // Check both the direct error message and nested error message
        const errorMessage = error.message || (error.error && error.error.message) || '';
        
        if (errorMessage.includes('can only afford')) {
          const availableTokens = extractAvailableTokens(errorMessage)
          if (availableTokens) {
            console.log(`Adjusting token limit from ${currentMaxTokens} to ${availableTokens}`)
            currentMaxTokens = availableTokens
            retryCount++
            continue
          }
        }
        
        // If we've reached max retries or it's not a token error, throw it
        if (retryCount >= maxRetries - 1) {
          throw error
        }
        retryCount++
      }
    }

    throw new Error('Maximum retry attempts reached')

  } catch (error) {
    console.error('Error generating story:', error)
    
    const errorDetails = {
      message: error.message,
      type: error.type || 'Unknown',
      status: error.status,
      statusCode: error.statusCode,
      currentMaxTokens: currentMaxTokens,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }
    
    console.error('Detailed error information:', JSON.stringify(errorDetails, null, 2))
    
    res.status(error.status || 500).json({ 
      error: 'Failed to generate story',
      details: errorDetails,
      message: error.message || 'An unexpected error occurred while generating the story'
    })
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})