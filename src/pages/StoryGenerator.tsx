import { useState } from 'react'
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Select,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import axios from 'axios'

// Add animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`

interface StoryForm {
  childName: string
  age: string
  interests: string
  learningGoals: string
  emotions: string
}

const StoryGenerator = () => {
  const [formData, setFormData] = useState<StoryForm>({
    childName: '',
    age: '',
    interests: '',
    learningGoals: '',
    emotions: '',
  })
  const [story, setStory] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const generateStory = async () => {
    if (!formData.childName || !formData.age) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:3001/generate-story', formData)
      setStory(response.data.story)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to generate story. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box
      minH="100vh"
      bg="purple.50"
      backgroundImage="radial-gradient(circle at 1px 1px, purple.100 1px, transparent 0)"
      backgroundSize="40px 40px"
      py={10}
    >
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box
            animation={`${fadeIn} 1s ease-out`}
            textAlign="center"
          >
            <Heading 
              color="purple.600"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              textShadow="2px 2px 4px rgba(0,0,0,0.1)"
              mb={4}
            >
              Create Your Magical Story
            </Heading>
            <Text
              color="purple.500"
              fontSize="lg"
              maxW="600px"
              mx="auto"
            >
              Let's craft a personalized story that will spark your child's imagination!
            </Text>
          </Box>
          
          <Box
            bg="white"
            p={8}
            borderRadius="xl"
            shadow="xl"
            border="1px"
            borderColor="purple.100"
            animation={`${fadeIn} 1s ease-out`}
            _hover={{ transform: 'translateY(-2px)', transition: 'transform 0.3s ease' }}
          >
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel fontWeight="bold" color="purple.700">Child's Name</FormLabel>
                <Input
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  placeholder="Enter child's name"
                  size="lg"
                  borderColor="purple.200"
                  _hover={{ borderColor: 'purple.300' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px purple.500' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="bold" color="purple.700">Age</FormLabel>
                <Select
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Select age range"
                  size="lg"
                  borderColor="purple.200"
                  _hover={{ borderColor: 'purple.300' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px purple.500' }}
                >
                  <option value="3-5">3-5 years</option>
                  <option value="6-8">6-8 years</option>
                  <option value="9-12">9-12 years</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold" color="purple.700">Interests</FormLabel>
                <Textarea
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder="What does your child like? (e.g., dinosaurs, space, princesses)"
                  size="lg"
                  borderColor="purple.200"
                  _hover={{ borderColor: 'purple.300' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px purple.500' }}
                />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold" color="purple.700">Learning Goals</FormLabel>
                <Textarea
                  name="learningGoals"
                  value={formData.learningGoals}
                  onChange={handleChange}
                  placeholder="What would you like your child to learn? (e.g., sharing, kindness, numbers)"
                  size="lg"
                  borderColor="purple.200"
                  _hover={{ borderColor: 'purple.300' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px purple.500' }}
                />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold" color="purple.700">Current Emotions</FormLabel>
                <Textarea
                  name="emotions"
                  value={formData.emotions}
                  onChange={handleChange}
                  placeholder="How is your child feeling today?"
                  size="lg"
                  borderColor="purple.200"
                  _hover={{ borderColor: 'purple.300' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px purple.500' }}
                />
              </FormControl>

              <Button
                colorScheme="purple"
                size="lg"
                onClick={generateStory}
                isLoading={isLoading}
                loadingText="Creating Magic..."
                width="full"
                py={7}
                fontSize="lg"
                fontWeight="bold"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                transition="all 0.2s"
              >
                Generate Story
              </Button>
            </VStack>
          </Box>

          {story && (
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              shadow="xl"
              border="1px"
              borderColor="purple.100"
              animation={`${fadeIn} 1s ease-out`}
              _hover={{ transform: 'translateY(-2px)', transition: 'transform 0.3s ease' }}
            >
              <Heading size="lg" mb={6} color="purple.600">
                Your Magical Story
              </Heading>
              <Text
                whiteSpace="pre-line"
                fontSize="lg"
                lineHeight="1.8"
                color="gray.700"
              >
                {story}
              </Text>
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  )
}

export default StoryGenerator 