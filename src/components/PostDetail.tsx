import { Box, VStack, HStack, Text, Icon  } from "@chakra-ui/react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

interface IAuthorProps {
    name: string,
    username: string,
    nickname: string
}

interface IPostProps {
    id: number,
    like_count: number,
    browsing_count: number,
    author: IAuthorProps,
    comments: string,
    board_name: string,
    created_at: string,
    updated_at: string,
    title: string,
    content: string,
    sortation: string,
    is_deleted: boolean,
    board: number,
    comment_count: number
}


export default function PostDetail( 
    {
        postData,
        beforeUrl,
    }:{
        postData:IPostProps,
        beforeUrl:string
    } ) {


    return (
        <Box>
            {<VStack alignItems={"flex-start"}>
                <Box pb={10} width={"100%"} borderBottomWidth={2}>
                    <Box><Link to={beforeUrl}><Text fontSize={16}>{postData.board_name}</Text></Link></Box>
                    <Box><Text fontSize={35}>{postData.title}</Text></Box>
                    <HStack width={"100%"}>
                        {/* 계정정보 */}
                        <Box>
                            <HStack>
                                <Icon as={BsPersonCircle}/>
                                <Text>{postData.author.nickname}</Text>
                            </HStack>
                            <Text>{postData.updated_at.substring(0,10)}</Text>
                        </Box>
                        <HStack ml="auto">
                            <Text>갖가지</Text>
                            <Text>메뉴</Text>
                        </HStack>
                    </HStack>
                </Box>
                <Box mt={2}>
                    {postData.content}
                </Box>
            </VStack>}
        </Box>
    )
}