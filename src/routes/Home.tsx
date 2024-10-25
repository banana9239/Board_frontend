import { Box, Grid, VStack, HStack, Text, GridItem, Table, Thead, TableContainer, Tr, Td, TableCaption, Th, Tbody } from "@chakra-ui/react";

export default function Home() {
    return (
      <Box mt={10} py={5} px={10}>
        <Grid gap={2} templateColumns={"repeat(10, 1fr)"}>
          <GridItem w='100%' h='10' bg='blue.100' />
          <GridItem w='100%' h='10' bg='blue.200' />
          <GridItem w='100%' h='10' bg='blue.300' />
          <GridItem w='100%' h='10' bg='blue.400' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>
        <Grid mt={2} gap={2} templateColumns={"repeat(10, 1fr)"}>
          <GridItem w='100%' h='10' bg='red.100' />
          <GridItem w='100%' h='10' bg='red.200' />
          <GridItem w='100%' h='10' bg='red.300' />
          <GridItem w='100%' h='10' bg='red.400' />
          <GridItem w='100%' h='10' bg='red.500' />
          <GridItem w='100%' h='10' bg='red.500' />
          <GridItem w='100%' h='10' bg='red.500' />
          <GridItem w='100%' h='10' bg='red.500' />
        </Grid>
        <Grid mt={2} gap={2} templateColumns={"repeat(10, 1fr)"}>
          <Box w='100%' h='10' bg='green.100' />
          <Box w='100%' h='10' bg='green.200' />
          <Box w='100%' h='10' bg='green.300' />
          <Box w='100%' h='10' bg='green.400' />
          <Box w='100%' h='10' bg='green.500' />
        </Grid>
        <TableContainer width="100%" overflowX={"auto"} >
          <Table width={"100%"}>
            <TableCaption placement='top'>게시판 제목</TableCaption>
            <Thead>
              <Tr>
                <Th textAlign={"center"} flex={1}>번호</Th>
                <Th textAlign={"center"} flex={3}>말머리</Th>
                <Th textAlign={"center"} flex={5}>제목[댓글수]</Th>
                <Th textAlign={"center"} flex={5}>작성자</Th>
                <Th textAlign={"center"} flex={1}>조회수</Th>
                <Th textAlign={"center"} flex={1}>추천수</Th>
                <Th textAlign={"center"} flex={5}>작성일</Th>
              </Tr>
            </Thead>
            <Tbody >
              <Tr>
                <Td padding={"2px"} textAlign={"center"} flex={1}>1</Td>
                <Td padding={"0px"} textAlign={"center"} flex={3}>Row 1</Td>
                <Td padding={"0px"} flex={5}>Row 1 Data[3]</Td>
                <Td padding={"0px"} flex={5}>Row </Td>
                <Td padding={"0px"} textAlign={"center"} flex={1}>3</Td>
                <Td padding={"0px"} textAlign={"center"} flex={1}>1</Td>
                <Td padding={"0px"} textAlign={"center"} flex={5}>Row 1 Data 3</Td>
              </Tr>
              <Tr>
                <Td padding={"2px"} textAlign={"center"} flex={1}>1</Td>
                <Td padding={"0px"} textAlign={"center"} flex={3}>Row 1</Td>
                <Td padding={"0px"} flex={5}>Row 1 Data[3]</Td>
                <Td padding={"0px"} flex={5}>Row </Td>
                <Td padding={"0px"} textAlign={"center"} flex={1}>3</Td>
                <Td padding={"0px"} textAlign={"center"} flex={1}>1</Td>
                <Td padding={"0px"} textAlign={"center"} flex={5}>Row 1 Data 3</Td>
              </Tr>
              <Tr>
                <Td padding={"2px"} textAlign={"center"} flex={1}>1</Td>
                <Td padding={"0px"} textAlign={"center"} flex={3}>Row 1</Td>
                <Td padding={"0px"} flex={5}>Row 1 Data[3]</Td>
                <Td padding={"0px"} flex={5}>Row </Td>
                <Td padding={"0px"} textAlign={"center"} flex={1}>3</Td>
                <Td padding={"0px"} textAlign={"center"} flex={1}>1</Td>
                <Td padding={"0px"} textAlign={"center"} flex={5}>Row 1 Data 3</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>      

    );
  }