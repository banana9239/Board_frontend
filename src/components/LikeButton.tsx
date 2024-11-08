import { Button } from '@chakra-ui/react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BsFillHeartbreakFill  } from "react-icons/bs";

export default function LikeButton() {
    return (
        <Button leftIcon={<FaRegHeart/>}>좋아요 </Button>
    )
}