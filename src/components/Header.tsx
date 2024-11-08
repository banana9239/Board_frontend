import { Box, Button, HStack, IconButton, LightMode, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SiBillboard} from 'react-icons/si'
import { PiBlueprintFill, PiBlueprintLight } from "react-icons/pi";
import { Link } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'
import useUser from '../lib/useUser';
import { BsPersonCircle } from "react-icons/bs";
import { logOut } from '../api';
import { useQueryClient } from '@tanstack/react-query';

export default function Header() {
    const {isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen} = useDisclosure();
    const {isOpen:isSignupOpen, onClose:onSignupClose, onOpen:onSignupOpen} = useDisclosure();
    const {toggleColorMode} = useColorMode();
    const Icon = useColorModeValue(PiBlueprintFill, PiBlueprintLight);
    const {userLoading, user, isLogIn} = useUser();
    const queryClient = useQueryClient();
    async function logOutDo(){
        await logOut();
        queryClient.refetchQueries({queryKey:['me']});
        alert("로그아웃 되었습니다.");
    }
    
    return (
        <HStack justifyContent={"space-between"} py={5} px={10} borderBottomWidth={1}>
            <Box color="blue.500">
            <Link to="/" >
                <SiBillboard size={80} />
            </Link>
            </Box>
            <HStack spacing={2}>
            <IconButton onClick={toggleColorMode} aria-label="Toglle dark mode" variant={"ghost"} icon={<Icon size={40} />}></IconButton>
            {!userLoading && isLogIn ? 
            <Menu>
                <MenuButton>
                    <HStack><BsPersonCircle /><Text>{user.nickname}</Text></HStack>
                </MenuButton>
                <MenuList>
                    <MenuItem>설정</MenuItem>
                    <MenuItem onClick={logOutDo}>로그아웃</MenuItem>
                </MenuList>
            </Menu>
             : 
            <>
            <Button onClick={onLoginOpen}>Log in</Button>
            <LightMode><Button onClick={onSignupOpen} colorScheme="yellow">Sign up</Button></LightMode>
            </>}
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose}/>
            <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose}/>
        </HStack>
    )
}