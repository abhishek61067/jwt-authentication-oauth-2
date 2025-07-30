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
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

const RoleBasedProtectedRoute = ({ children, allowedRole }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { accessToken, userRole } = useAuthStore();
  const [showNavigate, setShowNavigate] = useState(false);

  useEffect(() => {
    if (!accessToken) {
      onOpen();
    } else if (accessToken && !allowedRole.includes(userRole)) {
      onOpen();
    }
  }, [accessToken, allowedRole, userRole, onOpen]);

  const handleClose = () => {
    onClose();
    setShowNavigate(true);
    if (!accessToken) {
      window.location.href = "/login"; // Redirect to login page
    } else {
      window.location.href = "/unauthorized"; // Redirect to unauthorized page
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
              {!accessToken
                ? "You must be logged in to access this page."
                : "You do not have permission to access this page."}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClose}>
                {!accessToken ? "Go to Login" : "Close"}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
};

export default RoleBasedProtectedRoute;
