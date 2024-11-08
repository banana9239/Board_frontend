import { Box} from "@chakra-ui/react";
import CategoryList from "../components/CategoryList";
import { useQuery } from "@tanstack/react-query";
import { getboards, getLargeCategories, getMediumCategories, getPosts, getSmallCategories } from "../api";
import { useParams } from "react-router-dom";
import PostList from "../components/PostList";


export default function Home() {  
  const { largePk, mediumPk, smallPk, boardPk } = useParams();
  
  const {isLoading:largeLoding, data:largeData} = useQuery({
    queryKey: ['largeCategories'], 
    queryFn: getLargeCategories
  });

  const {isLoading:mediumLoding,data:mediumData} = useQuery({
    queryKey: ['mediumCategories', largePk], 
    queryFn: getMediumCategories
  });
  
  const {isLoading:smallLoding,data:smallData} = useQuery({
    queryKey: ['smallCategories', largePk, mediumPk], 
    queryFn: getSmallCategories
  });

  const {isLoading:boardLoading,data:boardData} = useQuery({
    queryKey: ['boards', largePk, mediumPk, smallPk], 
    queryFn: getboards
  });

  const {isLoading:postLoading,data:postData} = useQuery({
    queryKey: ['posts', largePk, mediumPk, smallPk, boardPk], 
    queryFn: getPosts
  });
  
  return (
    <Box>
      {!largeLoding && <CategoryList largeData={largeData} mediumData={mediumData} smallData={smallData} boardData={boardData}/> }
      {!postLoading && postData && <PostList data={postData}/>}
    </Box>
  );
}