import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StoryGenerator from './pages/StoryGenerator'
import Navbar from './components/Navbar'

function App() {
  console.log('App component rendering');
  return (
    <Router>
      <Box minH="100vh" bg="gray.50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<StoryGenerator />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
