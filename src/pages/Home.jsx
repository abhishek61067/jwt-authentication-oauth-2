import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router";

const Home = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    px={4}
    py={12}
    textAlign="center"
    w={"100vw"}
  >
    <Heading as="h1" size="3xl" mb={4} color="cyan.300" shadow="xl">
      Authentication and Authorization with JWT
    </Heading>

    <Text fontSize="lg" mb={6} maxW="600px" color="gray.300">
      Learn how to securely manage user sessions with JWT
    </Text>

    <Stack spacing={4} mt={16} mb={16}>
      <Text fontWeight="normal" color="gray.200">
        🔐 Secure Login System
      </Text>
      <Text fontWeight="normal" color="cyan.200">
        🔁 Refresh Token Flow
      </Text>
      <Text fontWeight="normal" color="gray.500">
        🛡️ Protected Routes & RBAC
      </Text>
    </Stack>

    <Button as={Link} to="/login" colorScheme="cyan" size="lg" shadow="md">
      Get Started
    </Button>

    {/* Optional image below */}
    {/* <Image src="/jwt-diagram.png" alt="JWT Flow" mt={10} borderRadius="lg" /> */}
  </Box>
);

export default Home;
