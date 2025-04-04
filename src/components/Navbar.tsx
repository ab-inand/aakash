import { Box, Flex, Link, Heading } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg="white" px={4} shadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md" color="purple.600">
          StoryBot
        </Heading>
        <Flex alignItems="center" gap={4}>
          <Link as={RouterLink} to="/" color="gray.600" _hover={{ color: 'purple.600' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/generate" color="gray.600" _hover={{ color: 'purple.600' }}>
            Generate Story
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 