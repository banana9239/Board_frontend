import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import router from "../router";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack justifyContent={"center"} minH={"100vh"}>
        <Heading>404 Not Found</Heading>
        <Text></Text>
        <Link to="/">
            <Button colorScheme={"purple"} variant={"solid"}>Go Home</Button>
        </Link>
    </VStack>
  );
}