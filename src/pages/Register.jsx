import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { useForm } from "react-hook-form";
import { useRegister } from "../services/auth/auth.js";
import { useToast } from "@chakra-ui/react";

const Register = () => {
  const toast = useToast();
  const { mutateAsync: registerUser } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
      role: "USER",
    },
  });

  const onSubmit = async (formData) => {
    try {
      await registerUser(formData);
      toast({
        title: "Registration Successful",
        description: "You have successfully registered.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Registration failed:", error);
      toast({
        title: "Registration Failed",
        description: error.response?.data?.message || "An error occurred.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      w={{ base: "90%", md: "400px" }}
      mt={10}
      p={8}
      borderRadius="lg"
      boxShadow="5px 10px 50px 2px #0003"
      color="white"
      border={"1px"}
      borderColor={"gray.800"}
    >
      {" "}
      <Heading mb={6} size={"lg"} textAlign={"center"}>
        Register
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isInvalid={errors.username}>
            <FormLabel>UserName</FormLabel>
            <Input
              borderColor={"gray.300"}
              type="text"
              placeholder="Enter username"
              {...register("username", { required: "Username is required" })}
            />
            <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              borderColor={"gray.300"}
              type="email"
              placeholder="Enter email"
              {...register("email", { required: "Email is required" })}
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              borderColor={"gray.300"}
              type="password"
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.role}>
            <FormLabel>Role</FormLabel>
            <Select
              color={"gray.400"}
              {...register("role", { required: "Role is required" })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </Select>
            <FormErrorMessage>{errors?.role?.message}</FormErrorMessage>
          </FormControl>
          <Button colorScheme="cyan" color={"black"} type="submit" width="full">
            Register
          </Button>
          <Text fontSize={"sm"} color={"gray.600"}>
            Already have an account?
            <ChakraLink
              as={RouterLink}
              to="/login"
              color="cyan.400"
              fontWeight="bold"
              ml={1}
            >
              Login
            </ChakraLink>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default Register;
