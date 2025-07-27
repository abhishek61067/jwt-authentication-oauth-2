import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  VStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const dummyProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$79.99",
    image:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149.99",
    image:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$49.99",
    image:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$99.99",
    image:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Keyboard",
    price: "$69.99",
    image:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ProductCard = ({ product }) => {
  return (
    <Box
      bg={useColorModeValue("whiteAlpha.200", "whiteAlpha.100")}
      backdropFilter="blur(8px)"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        borderRadius="md"
        mx="auto"
        mb={4}
      />
      <VStack spacing={1} align="start">
        <Text fontWeight="bold">{product.name}</Text>
        <Text color="gray.700">{product.price}</Text>
        <Button size="sm" colorScheme="cyan" mt={2}>
          Buy Now
        </Button>
      </VStack>
    </Box>
  );
};

const ProductPage = () => {
  return (
    <Box p={20}>
      <Box
        w={"70vw"}
        p={"10"}
        mx="auto"
        bg={"gray.600"}
        backdropFilter="blur(16px)"
        borderRadius="2xl"
      >
        <Heading mb={6} textAlign="center" size="xl" color="gray.400">
          Explore Our Products
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProductPage;
