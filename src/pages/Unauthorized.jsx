import React from "react";
import { Box, Heading, Text, Button, VStack, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { WarningTwoIcon } from "@chakra-ui/icons";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
      rounded={"xl"}
      boxShadow="0 4px 10px rgba(0, 0, 0, 0.2)" // black shadow with opacity
    >
      <VStack spacing={6} maxW="lg" p={8} borderRadius="lg" textAlign="center">
        <Icon as={WarningTwoIcon} w={10} h={10} color="cyan.500" />
        <Heading size="lg" color="gray.400">
          Access Denied
        </Heading>
        <Text color="gray.600">
          You need to be an <b>admin</b> to view this page. Please log in with
          an admin account.
        </Text>
        <Button colorScheme="cyan" onClick={handleLoginRedirect}>
          Login as Admin
        </Button>
      </VStack>
    </Box>
  );
};

export default Unauthorized;
