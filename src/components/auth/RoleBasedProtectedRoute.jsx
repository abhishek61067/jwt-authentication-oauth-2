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

const RoleBasedProtectedRoute = ({ children, allowedRole = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { accessToken, userRole } = useAuthStore();

  useEffect(() => {
    if (!accessToken) {
      onOpen();
    } else if (accessToken && !allowedRole.includes(userRole)) {
      onOpen();
    }
  }, [accessToken, allowedRole, userRole, onOpen]);

  const handleClose = () => {
    onClose();
    if (!accessToken) {
      window.location.href = "/login";
    } else {
      window.location.href = "/unauthorized";
    }
  };

  if (accessToken && allowedRole.includes(userRole)) {
    return children;
  } else {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="gray.800" color="gray.300">
            <ModalHeader>Access Denied</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {!accessToken ? (
                <Text>You must be logged in to access this page.</Text>
              ) : (
                <Text>You do not have permission to access this page.</Text>
              )}
            </ModalBody>

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

export default RoleBasedProtectedRoute;
