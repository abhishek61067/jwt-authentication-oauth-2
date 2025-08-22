import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useLogin } from "../services/auth/auth";
import { useAuthStore } from "../store/authStore";
import { auth } from "../services/auth/firebaseConfig.js";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const { setTokens } = useAuthStore();

  const { mutateAsync: login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("formdata: ", data);
    try {
      const response = await login(data);
      const { accessToken, refreshToken } = response.data;
      const userRole = response.data.user.role;
      setTokens({
        accessToken,
        refreshToken,
        userRole,
      });

      navigate("/product");
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("google logged in user:", result.user);
      const { accessToken, refreshToken } = result.user.stsTokenManager;
      setTokens({
        accessToken,
        refreshToken,
        userRole: "USER",
      });
      navigate("/product");
    } catch (error) {
      console.error(error);
    }
  };
  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("github logged in user:", result.user);
      const { accessToken, refreshToken } = result.user.stsTokenManager;
      setTokens({
        accessToken,
        refreshToken,
        userRole: "USER",
      });
      navigate("/product");
    } catch (error) {
      console.error(error);
    }
  };
  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("fb logged in user:", result.user);
      const { accessToken, refreshToken } = result.user.stsTokenManager;
      setTokens({
        accessToken,
        refreshToken,
        userRole: "USER",
      });
      navigate("/product");
    } catch (error) {
      console.error(error);
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
      <Heading size={"lg"} mb={6} textAlign="center">
        Login
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              borderColor={"gray.300"}
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              borderColor={"gray.300"}
              type="password"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>
          <Button
            colorScheme="cyan"
            width={"full"}
            type="submit"
            color={"black"}
          >
            Login
          </Button>
          <Button
            variant={"outline"}
            colorScheme="cyan"
            width={"full"}
            onClick={() => navigate("/register")}
          >
            Create an account
          </Button>
          <Button width={"full"} onClick={signInWithGoogle}>
            <Text me={5}>Sign in With Google</Text>
            <FcGoogle size={24} />
          </Button>
          <Button width={"full"} onClick={signInWithGithub}>
            <Text me={5}>Sign in With Github</Text>
            <FaGithub size={24} />
          </Button>
          <Button width={"full"} onClick={signInWithFacebook}>
            <Text me={5}>Sign in With Facebook</Text>
            <FaFacebook color="blue" size={24} />
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
