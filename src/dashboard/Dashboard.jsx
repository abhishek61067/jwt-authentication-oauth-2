import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
} from "@chakra-ui/react";

const StatCard = ({ label, value, helpText }) => {
  return (
    <Stat
      px={10}
      py={5}
      shadow="lg"
      rounded={"xl"}
      bg={"gray.900"}
      color={"gray.300"}
    >
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
      <StatHelpText>{helpText}</StatHelpText>
    </Stat>
  );
};

const Dashboard = () => {
  return (
    <Box p={6}>
      <Heading size="lg" mb={4} color={"gray.300"}>
        Dashboard
      </Heading>

      {/* Stat Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
        <StatCard label="Users" value="1,250" helpText="↑ 12% this week" />
        <StatCard label="Sales" value="$1,300" helpText="↑ 7% this month" />
        <StatCard label="Active Sessions" value="312" helpText="↓ 5% today" />
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
