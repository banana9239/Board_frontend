import { Box} from "@chakra-ui/react";
import CategoryList from "../components/CategoryList";
import { useQuery } from "@tanstack/react-query";
import { getboards, getLargeCategories, getMediumCategories, getPosts, getSmallCategories } from "../api";
import { useParams } from "react-router-dom";
import PostList from "../components/PostList";


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
  
  return (
    <Box>
      {!largeLoding && <CategoryList largeData={largeData} mediumData={mediumData} smallData={smallData} boardData={boardData}/> }
      <PostList data={postData}/>
    </Box>
  );
}