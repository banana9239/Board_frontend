import { Box, Button, HStack, IconButton, LightMode, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SiBillboard} from 'react-icons/si'
import { PiBlueprintFill, PiBlueprintLight } from "react-icons/pi";
import { Link } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

export default function Header() {
    const {isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen} = useDisclosure();
    const {isOpen:isSignupOpen, onClose:onSignupClose, onOpen:onSignupOpen} = useDisclosure();
    const {toggleColorMode} = useColorMode();
    const Icon = useColorModeValue(PiBlueprintFill, PiBlueprintLight);
    
    return (
        <HStack justifyContent={"space-between"} py={5} px={10} borderBottomWidth={1}>
            <Box color="blue.500">
            <Link to="/" >
                <SiBillboard size={80} />
            </Link>
            </Box>
            <HStack spacing={2}>
            <IconButton onClick={toggleColorMode} aria-label="Toglle dark mode" variant={"ghost"} icon={<Icon size={40} />}></IconButton>
            <Button onClick={onLoginOpen}>Log in</Button>
            <LightMode><Button onClick={onSignupOpen} colorScheme="yellow">Sign up</Button></LightMode>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose}/>
            <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose}/>
        </HStack>
    )
}