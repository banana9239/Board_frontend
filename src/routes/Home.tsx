import { Box, Button, Text} from "@chakra-ui/react";
import CategoryList from "../components/CategoryList";
import { useQuery } from "@tanstack/react-query";
import { getboards, getLargeCategories, getMediumCategories, getPosts, getSmallCategories } from "../api";
import { Link, useParams } from "react-router-dom";
import PostList from "../components/PostList";
import { useEffect, useState } from "react";
import useUser from "../lib/useUser";


export default function Home() {  
  const { loadLargePk, loadMediumPk, loadSmallPk, loadBoardPk } = useParams();
  
  const {isLoading:largeLoding, data:largeData} = useQuery({
    queryKey: ['largeCategories'], 
    queryFn: getLargeCategories
  });
  const largePk = loadLargePk || (largeData && largeData.length > 0 ? largeData[0].id : null);

  const {data:mediumData} = useQuery({
    queryKey: ['mediumCategories', largePk], 
    queryFn: getMediumCategories,
    enabled: !!largePk
  });
  const mediumPk = loadMediumPk || (mediumData && mediumData.length > 0 ? mediumData[0].id : null);

  const {data:smallData} = useQuery({
    queryKey: ['smallCategories', largePk, mediumPk], 
    queryFn: getSmallCategories,
    enabled: !!mediumPk
  });
  const smallPk = loadSmallPk || (smallData && smallData.length > 0 ? smallData[0].id : null);

  const {data:boardData} = useQuery({
    queryKey: ['boards', largePk, mediumPk, smallPk], 
    queryFn: getboards,
    enabled: !!smallPk
  });
  const boardPk = loadBoardPk || (boardData && boardData.length > 0 ? boardData[0].id : null);

  const {data:postData} = useQuery({
    queryKey: ['posts', largePk, mediumPk, smallPk, boardPk], 
    queryFn: getPosts,
    enabled: !!boardPk
  });
  
  var board_name = boardData && boardData.length > 0 ? boardData[0].board_name : "";

  if(boardPk !== null && boardData){
    for(let i=0; i<boardData.length; i++){
      if(String(boardData[i].id) === boardPk){
        board_name = boardData[i].board_name;
      }
    }
  }
  const [beforeUrl, setBeforeUrl] = useState("");

  const [pageSize, setPageSize] = useState(5);
  const [count, setCount] = useState(50);
  const [page, setPage] = useState(1)
  const items = new Array(count).fill(0).map((_, index) => `Lorem ipsum dolor sit amet ${index + 1}`)

  const startRange = (page - 1) * pageSize
  const endRange = startRange + pageSize

  const visibleItems = items.slice(startRange, endRange);

  const {user} = useUser();

  useEffect(() => {
    setBeforeUrl(`/${largePk}/${mediumPk}/${smallPk}/${boardPk}`);

    
  },[boardPk]);
  

  return (
    <Box>
      {!largeLoding && <CategoryList largeData={largeData} mediumData={mediumData} smallData={smallData} boardData={boardData}/> }
      <PostList 
        data={postData} 
        board_name={board_name}
        beforeUrl={beforeUrl}
      />
      <Box py={5} px={10} width="100%">
      {visibleItems.map((item, index) => {
        return (<>
          <Text display="flex" justifyContent="flex-end">{index}</Text>
          </>)})}
      </Box>
      <Box width={"100%"} display="flex" justifyContent="flex-end" py={5} px={10}>
        {!user ? "":<Link to={"/post/editor"} state={{boardPk:boardPk, }}><Button ml="auto">글쓰기</Button></Link>}
        
      </Box>
    </Box>
  );
}