import { Box, Button, Card, CardBody, CardHeader, CircularProgress, CircularProgressLabel, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import { SiMetacritic } from 'react-icons/si';

interface gameCard {
    name:string | undefined;
    picture:string| undefined;
    normalPrice:string;
    salePrice:string;
    metacritic:string;
}

export default function GameCard ({name, picture, normalPrice, salePrice, metacritic}:gameCard){
  return (
    <Flex flexDir="column" h="200px" w="300px" bg="rgba(0,0,0,0.2)" boxShadow="xl" m="1rem" borderRadius=".5rem">
      <Image h="70px" src={picture} alt={name} borderTopRadius=".5rem"/>
      <Flex flexDir="column" w="100%" ml="1rem" mt=".4rem">
        <Box h="40px" alignItems="baseline">
          <Heading fontSize="md">{name}</Heading>
        </Box>
        <Text>Metacritic: {metacritic}</Text>      
        <Text fontSize="14px">Normal price: {normalPrice}</Text>
        <Box h="25px" w="100%">
          <Text color="#FE4F00" fontWeight="bold" fontSize="20px">Sale: {salePrice}</Text>
        </Box>
      </Flex>

    </Flex>
      
  )
}

//TODO add esquema de cores metacritic
//TODO add "view page" e "buy" no final dos cards, um de cinza e outro de laranja
