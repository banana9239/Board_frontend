import { Box, Button, HStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { getComments, getPost } from "../api";
import PostDetail from "../components/PostDetail";
import LikeButton from "../components/LikeButton";
import Comment from "../components/Comment";
import { useState } from "react";


export default function Post (){
    const {postPk} = useParams();
    const {isLoading:postLoading, data:postData} = useQuery({
        queryKey: ['post', postPk],
        queryFn: getPost
    })

    const [showComment, setShowComment] = useState(false);
    const showCommets = () => {
        setShowComment(!showComment);
    }
    const {isLoading:commentLoading, data:commentData} = useQuery({
        queryKey: ['comments', postPk],
        queryFn: getComments
    })
    
    return (<>
        <Box py={5} px={10}>
            {!postLoading && 
            <PostDetail postData={postData}/>}
            {!postLoading && 
            <HStack pt={10} mt={5} borderTopWidth={2}>
                <LikeButton />
                <Button onClick={showCommets} leftIcon={<FaRegComment/>}>댓글 [{postData.comment_count}]</Button>
            </HStack>}
            {!commentLoading && showComment &&
                <Comment commentData={commentData}/>
            }
        </Box>
        </>

    )
}