import { Box, Button, Input, Text, VStack, FormControl, FormHelperText, FormLabel, Textarea, Select  } from "@chakra-ui/react";
import ProtectPage from "../components/ProtectPage";
import { useForm } from "react-hook-form";
import useUser from "../lib/useUser";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getboard, posting } from "../api";
import { useLocation, useNavigate } from "react-router-dom";

interface IPostProps {
    title: string,
    content: string,
    sortation: string,
    board:string
}

interface IBoardProps {
    id: string,
    post_count: number,
    created_at: string,
    updated_at: string,
    board_name: string,
    board_category: number
}


export default function PostForm() {
    const { register, handleSubmit } = useForm<IPostProps>();
    const {user} = useUser();
    const location = useLocation();
    const {boardPk} = location.state||null;
    const { data: boardData } = useQuery<IBoardProps>({
        queryKey: ["boards",boardPk], 
        queryFn: getboard,
        enabled: !!boardPk
    });
    
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: posting,
        onSuccess: (data) => {
            alert("되었어!");
            console.log(data);
            navigate(`/post/${data.id}`);
        },
        onError: (data) => {
            alert(data);
        }
    })

    const onSubmit = (data: IPostProps) => {
        data.board = boardData?.id||"";
        console.log(data);
        mutation.mutate(data)
    }
    return (
        <ProtectPage>
            <Box py={5} px={10} width={"100%"} height={"400px"}>
                <VStack as={"form"} onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                        <FormLabel>게시판</FormLabel>
                        <Input type="text"  {...register("board", {
                            required:true
                        })} isDisabled={false} value={boardData?.board_name}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>이름</FormLabel>
                        <Input isDisabled value={user.name}/> 
                    </FormControl>
                    <FormControl>
                        <FormLabel>제목</FormLabel>
                        <Input type="text" {...register("title", {
                            required:true
                        })}/>  
                    </FormControl>
                    <FormControl>
                        <FormLabel>내용</FormLabel>
                        <Textarea {...register("content",{
                            required:true
                        })}/>                         
                    </FormControl>
                    <FormControl>
                        <FormLabel>종류</FormLabel>
                        <Select
                            {...register("sortation", { required: true })}
                            placeholder="글의 종류를 선택해주세요"
                        >
                            <option value="공지">공지</option>
                            <option value="자유">자유</option>
                        </Select>
                    </FormControl>
                    <Button mt={10}
                        type="submit"
                        colorScheme={"red"}
                        size="lg"
                        w="100%"
                        >
                        posting!
                    </Button>
                </VStack>
            </Box>
        </ProtectPage>
    )
}