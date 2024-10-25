import { Box, Button, Input, InputGroup, InputLeftElement, LightMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { SiCryptpad, SiEducative } from "react-icons/si";
import { MdAlternateEmail, MdOutlineDriveFileRenameOutline } from "react-icons/md";
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
                <InputGroup>
                  <InputLeftElement children={
                    <Box color={"gray.500"}><SiCryptpad/></Box>
                  }/>
                  <Input variant={"outline"} placeholder="Password check!"/>
                </InputGroup>
                <InputGroup>
                  <InputLeftElement children={
                    <Box color={"gray.500"}><MdAlternateEmail/></Box>
                  }/>
                  <Input variant={"outline"} placeholder="Email"/>
                </InputGroup>
                <InputGroup>
                  <InputLeftElement children={
                    <Box color={"gray.500"}><MdOutlineDriveFileRenameOutline/></Box>
                  }/>
                  <Input variant={"outline"} placeholder="Nickname"/>
                </InputGroup>
              </VStack>
              <LightMode><Button mt={4} colorScheme="yellow" width={"100%"}>Sign up</Button></LightMode>
              <SocialLogin/>
            </ModalBody>
          </ModalContent>
        </Modal>
    )
}