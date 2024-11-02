import { Box, Table, TableCaption, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface IAuthorProps {
  name: string,
  username: string,
  nickname: string
}

interface IPostProps {
  id: number,
  title: string,
  author: IAuthorProps,
  like_count: number,
  browsing_count: number,
  comment_count: number,
  sortation: string,
  created_at: string
}

export default function PostList({data}: {data:IPostProps[]}) {
    const truncateTitle = (text:string) => {
        if (text.length > 10) {
          return text.substring(0, 10) + "...";
        }
    }
    
    return (
        <Box py={5} px={10}>
          <TableContainer width="100%" overflowX={"auto"} >
            <Table width={"100%"}>
              <TableCaption placement='top'>게시판 제목</TableCaption>
              <Thead>
                <Tr>
                  <Th textAlign={"center"} flex={1}>번호</Th>
                  <Th textAlign={"center"} flex={3}>말머리</Th>
                  <Th textAlign={"center"} flex={5}>제목[댓글수]</Th>
                  <Th flex={5}>작성자</Th>
                  <Th textAlign={"center"} flex={1}>조회수</Th>
                  <Th textAlign={"center"} flex={1}>추천수</Th>
                  <Th textAlign={"center"} flex={5}>작성일</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((post) => (
                <Tr>
                  <Td padding={"2px"} textAlign={"center"} flex={1}>{post.id}</Td>
                  <Td padding={"0px"} textAlign={"center"} flex={3}>{post.sortation}</Td>
                  <Td padding={"0px"} noOfLines={1} fontSize="sm" flex={5}><Link to={`/post/${post.id}`}>{truncateTitle(post.title) + "["+post.comment_count+"]"}</Link></Td>
                  <Td padding={"0px"} flex={5}><Link to={"/"}>{post.author.nickname}</Link></Td>
                  <Td padding={"0px"} textAlign={"center"} flex={1}>{post.browsing_count}</Td>
                  <Td padding={"0px"} textAlign={"center"} flex={1}>{post.like_count}</Td>
                  <Td padding={"0px"} textAlign={"center"} flex={5}>{post.created_at.substring(0,10)}</Td>
                </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
    )
  
}