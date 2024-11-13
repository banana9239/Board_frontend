import { Box, Button, HStack, Icon, Text, Textarea, VStack } from '@chakra-ui/react';
import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineReply } from "react-icons/hi";
import useUser from '../lib/useUser';

interface IAuthorProps {
    name: string,
    username: string,
    nickname: string
}

interface IReplyProps {
    id: number,
    content: string,
    author: IAuthorProps
    created_at: string
}

interface ICommentProps {
    id: number,
    content: string,
    author: IAuthorProps,
    created_at: string,
    replies: IReplyProps[]
}

export default function Comment(
    {
        commentData
    }:{
        commentData:ICommentProps[]
    }) {

    const {user, userLoading} = useUser();
    
    return (
            <Box>
                <VStack spacing={4} align="stretch">
                    {commentData?.map((comment) => (
                        <Box>
                            <VStack width={"100%"} alignItems={"flex-start"} p={4}>
                                <HStack width={"100%"} alignItems={"flex-start"}>
                                    <Icon alignSelf={"center"} as={BsPersonCircle}/><Text mr={10}>{comment.author.nickname}</Text>
                                    <Text>{comment.content}</Text>
                                    <Box ml={"auto"}>
                                        <Text>{`${comment.created_at.substring(0,10)}, ${comment.created_at.substring(11,19)}`}</Text>
                                    </Box>
                                </HStack>
                                {user && userLoading === false && user.username === comment.author.username && (
                                <Box ml={"auto"}>
                                    <Button height={7} fontSize={15}>수정</Button>
                                    <Button height={7} fontSize={15}>삭제</Button>
                                </Box>
                                )}
                            </VStack>
                            
                            {comment.replies.map((reply) => (
                                <Box ml={"98"} >
                                    <VStack width={"100%"} alignItems={"flex-start"} p={7} pt={0}>
                                        <HStack width={"100%"} alignItems={"flex-start"}>
                                            <Icon as={HiOutlineReply} transform={"rotate(180deg)"}/>
                                            <Icon alignSelf={"center"} as={BsPersonCircle}/>
                                            <Text mr={10}>{reply.author.nickname}</Text>
                                            <Text>{reply.content}</Text>
                                            <Box ml={"auto"}>
                                                <Text>{`${reply.created_at.substring(0,10)}, ${reply.created_at.substring(11,19)}`}</Text>
                                            </Box>
                                        </HStack>
                                        {user && userLoading === false && user.username === reply.author.username && (
                                        <Box ml={"auto"}>
                                            <Button height={7} fontSize={15}>수정</Button>
                                            <Button height={7} fontSize={15}>삭제</Button>
                                        </Box>
                                        )}
                                    </VStack>
                                </Box>
                            ))}
                        </Box>
                    ))}
                    <Box>
                        <Textarea placeholder="댓글을 작성하세요..." />
                        <Button mt={2}>댓글 작성</Button>
                    </Box>
                </VStack>
            </Box>            
    );
}