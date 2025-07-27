import { Button, Text, useDisclosure } from "@chakra-ui/react";
import { useAuthStore } from "../../store/authStore";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (!accessToken) {
      onOpen();
    }
  });

  const handleClose = () => {
    onClose();
    window.location.href = "/login"; // Redirect to login page
  };

  if (accessToken) {
    return children;
  } else {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="gray.800" color="gray.300">
            <ModalHeader>Authentication Required</ModalHeader>
            <ModalCloseButton />
            <ModalBody>You must be logged in to access this page.</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClose}>
                Go to Login
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
};

export default ProtectedRoute;
