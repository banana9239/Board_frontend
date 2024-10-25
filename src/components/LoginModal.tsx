import { Box, Button, Input, InputGroup, InputLeftElement, LightMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { SiCryptpad, SiEducative } from "react-icons/si";
import SocialLogin from "./SocialLogin";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({isOpen, onClose}: LoginModalProps){
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Log in</ModalHeader>
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
              <LightMode><Button mt={4} colorScheme="yellow" width={"100%"}>Log in</Button></LightMode>
              <SocialLogin/>
            </ModalBody>
          </ModalContent>
        </Modal>
    )
}