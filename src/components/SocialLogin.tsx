import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function SocialLogin(){
    return (
        <Box mb={4}>
            <HStack my={8}>
                <Divider/>
                <Text fontSize={"xs"} as={"b"}>Or</Text>
                <Divider/>
            </HStack>
            <VStack>
                <Button w="100%" colorScheme="red" leftIcon={<FaGithub/>}>github</Button>
                <Button w="100%" colorScheme="green" leftIcon={<RiKakaoTalkFill/>}>kakao</Button>
            </VStack>
        </Box>
    )
}