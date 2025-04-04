import { Box, Container, Heading, Text, Button, VStack, Icon, HStack, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { motion, Transition } from 'framer-motion'
import { FaMagic, FaBook, FaChild } from 'react-icons/fa'

// Wrap ChakraUI components with motion
const MotionBox = motion(Box)
const MotionVStack = motion(VStack)
const MotionLink = motion(Link)

const FeatureCard = ({ icon, title, description }: { icon: any; title: string; description: string }) => {
  const transition: Transition = {
    duration: 0.5,
    ease: "easeOut"
  }

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      bg="white"
      p={6}
      borderRadius="xl"
      shadow="lg"
      border="1px"
      borderColor="purple.100"
      style={{ transition: 'transform 0.3s' }}
      _hover={{ transform: 'translateY(-5px)', shadow: '2xl' }}
      textAlign="center"
      width="full"
      maxW="sm"
    >
      <Icon as={icon} w={10} h={10} color="purple.500" mb={4} />
      <Heading size="md" mb={3} color="purple.600">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </MotionBox>
  )
}

const Home = () => {
  const bgGradient = useColorModeValue(
    'linear(to-b, purple.50, white)',
    'linear(to-b, purple.900, gray.800)'
  )

  const containerTransition: Transition = {
    duration: 0.8
  }

  const buttonTransition: Transition = {
    type: "spring",
    duration: 0.2
  }

  return (
    <Box
      minH="calc(100vh - 64px)"
      bgGradient={bgGradient}
      py={20}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-10%"
        right="-10%"
        width="500px"
        height="500px"
        bg="purple.100"
        borderRadius="full"
        filter="blur(70px)"
        opacity={0.3}
        zIndex={0}
      />
      
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <MotionVStack
          spacing={12}
          align="center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={containerTransition}
        >
          {/* Hero Section */}
          <VStack spacing={6} textAlign="center">
            <Heading
              size="2xl"
              bgGradient="linear(to-r, purple.400, purple.600)"
              bgClip="text"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Create Magical Stories
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              maxW="2xl"
              lineHeight="tall"
            >
              Unleash your child's imagination with personalized AI-powered stories.
              Each tale is uniquely crafted to inspire, educate, and delight.
            </Text>
            <MotionLink
              to="/generate"
              style={{
                display: 'inline-block',
                textDecoration: 'none'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={buttonTransition}
            >
              <Button
                size="lg"
                colorScheme="purple"
                px={8}
                py={7}
                fontSize="lg"
                fontWeight="bold"
                rightIcon={<FaMagic />}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                }}
              >
                Start Your Story Adventure
              </Button>
            </MotionLink>
          </VStack>

          {/* Features Section */}
          <Box width="full" py={10}>
            <HStack
              spacing={8}
              align="stretch"
              justify="center"
              wrap="wrap"
              gap={8}
            >
              <FeatureCard
                icon={FaChild}
                title="Personalized Stories"
                description="Tailored to your child's age, interests, and learning goals"
              />
              <FeatureCard
                icon={FaMagic}
                title="AI-Powered Magic"
                description="Advanced AI technology creates unique and engaging narratives"
              />
              <FeatureCard
                icon={FaBook}
                title="Educational Value"
                description="Stories that entertain while supporting your child's development"
              />
            </HStack>
          </Box>
        </MotionVStack>
      </Container>
    </Box>
  )
}

export default Home 