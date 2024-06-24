import { Card, CardBody, CardHeader, CircularProgress, CircularProgressLabel, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
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
    <Flex h="100px" w="100%" bg="rgba(0,0,0,0.45)" m="1rem">
      <Image h="100%" src={picture} alt={name}/>
      <Flex flexDir="column" w="100%">
        <Heading fontSize="3xl">{name}</Heading>
        <Flex>
          <Text>Metacritic: {metacritic}</Text>
          <Spacer/>
          <Flex flexDir="column">
            <Text>Normal price: {normalPrice}</Text>
            <Text color="#FE4F00" fontWeight="bold">Sale: {salePrice}</Text>
          </Flex>

        </Flex>
      </Flex>

    </Flex>
      
  )
}

//TODO add esquema de cores metacritic
//TODO add "view page" e "buy" no final dos cards, um de cinza e outro de laranja
