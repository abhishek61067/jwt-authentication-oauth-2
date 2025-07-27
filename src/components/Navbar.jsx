import React from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  HStack,
  Container,
  Badge,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "./../store/authStore";
import { AxiosInstance } from "./../services/auth/AxiosInstance";

export const Navbar = () => {
  const { accessToken, clearTokens } = useAuthStore();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await AxiosInstance.post("users/logout");
      clearTokens();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Box
      boxShadow="0 4px 10px rgba(0, 0, 0, 0.2)" // black shadow with opacity
      py={3}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
    >
      <Container maxW="6xl" px={{ base: 4, md: 8 }}>
        <Flex align="center" justify="space-between" flexWrap="wrap">
          {/* Logo */}
          <Link to="/">
            <Image
              src="/src/assets/ecommerce-logo.svg"
              alt="E-commerce Logo"
              boxSize="50px"
              objectFit="contain"
            />
          </Link>

          {/* Product Catalog */}
          <Box
            display="flex"
            gap={{ base: 4, md: 10 }}
            mx={{ base: 2, md: 20 }}
            mt={{ base: 2, md: 0 }}
          >
            <Link to="/product">
              <Text
                fontSize={{ base: "md", md: "xl" }}
                _hover={{ color: "blue.300" }}
                color="gray.400"
              >
                Product Catalog
              </Text>
            </Link>

            <Link to="/dashboard">
              <Text
                fontSize={{ base: "md", md: "xl" }}
                _hover={{ color: "blue.300" }}
                color="gray.400"
              >
                Dashboard
              </Text>
            </Link>
          </Box>

          {/* Navigation Buttons */}
          <HStack spacing={{ base: 2, md: 4 }} mt={{ base: 2, md: 0 }}>
            {!accessToken ? (
              <>
                <Link to="/login">
                  <Button
                    colorScheme="cyan"
                    color="black"
                    size={{ base: "sm", md: "md" }}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    variant="outline"
                    colorScheme="cyan"
                    size={{ base: "sm", md: "md" }}
                  >
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <Button
                colorScheme="cyan"
                color="black"
                size={{ base: "sm", md: "md" }}
                onClick={logout}
              >
                Logout
              </Button>
            )}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
