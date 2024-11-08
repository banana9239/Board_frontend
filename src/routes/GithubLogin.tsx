import {Box, Button, Center, Heading, Spinner, Text, VStack} from "@chakra-ui/react";
import {useLocation, useNavigate} from "react-router-dom";
import {FaGithub} from "react-icons/fa";
import { useEffect } from "react";
import { githubLogin } from "../api";
import { useQueryClient } from "@tanstack/react-query";


export default function GithubLogin() {
    const {search} = useLocation();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    async function confirmLogin(){
        const params = new URLSearchParams(search);
        const code = params.get("code");
        if(code){
            const res = await githubLogin(code);
            if (res === 200){
                queryClient.refetchQueries({queryKey:['me']});
                alert("로그인 성공");
                navigate("/");
            }
            else{
                alert("로그인 실패");
                navigate("/");
            }
        }
    }

    useEffect(() => {
        confirmLogin();
    }, [])
    return (
        <Box>
            <VStack justifyContent={"center"} minH={"80vh"}>
                <FaGithub size={50}/>
                <Heading>Processing login...</Heading>
                <Text fontSize={20}>please wait..!</Text>
            </VStack>
            <Box pos="absolute" inset="0" bg="bg/80">
                <Center h="full">
                    <Spinner color="teal.500" />
                </Center>
            </Box>
        </Box>
    )
}