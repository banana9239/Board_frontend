import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { SiCryptpad, SiEducative } from "react-icons/si";
import SocialLogin from "./SocialLogin";

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SignUpModal({isOpen, onClose}: SignUpModalProps){
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Sign up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={3}>
                <InputGroup>
                  <InputLeftElement children={
                    <Box color={"gray.500"}><SiEducative/></Box>
                  }/>
                  <Input variant={"outline"} placeholder="Username"/>
                </InputGroup>
                <InputGroup>
                  <InputLeftElement children={
                    <Box color={"gray.500"}><SiCryptpad/></Box>
                  }/>
                  <Input variant={"outline"} placeholder="Password"/>
                </InputGroup>
              </VStack>
              <Button mt={4} colorScheme="yellow" width={"100%"}>Sign up</Button>
              <SocialLogin/>
            </ModalBody>
          </ModalContent>
        </Modal>
    )
}