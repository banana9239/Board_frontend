import { Box, Button, HStack, IconButton } from '@chakra-ui/react'
import { SiBillboard, SiBlueprint } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

export default function Header() {
    const {isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen} = useDisclosure();
    const {isOpen:isSignupOpen, onClose:onSignupClose, onOpen:onSignupOpen} = useDisclosure();

    return (
        <HStack justifyContent={"space-between"} py={5} px={10} borderBottomWidth={1}>
            <Box color="blue.500">
            <Link to="/" >
                <SiBillboard size={80} />
            </Link>
            </Box>
            <HStack spacing={2}>
            <IconButton aria-label="Toglle dark mode" variant={"ghost"} icon={<SiBlueprint/>}></IconButton>
            <Button onClick={onLoginOpen}>Log in</Button>
            <Button onClick={onSignupOpen} colorScheme="yellow">Sign up</Button>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose}/>
            <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose}/>
        </HStack>
    )
}