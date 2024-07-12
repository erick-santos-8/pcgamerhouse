import { Flex, Grid, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import GameCard  from "../components/dealsCard/GameCard"

const Home = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const data = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
        const res = await data.json();
        setSales(res)
        setLoading(true)
      }catch(error){<Flex><Heading>Erro ao receber os dados!</Heading></Flex>}
    }

    fetchData();
  }, [])

  return (
    <Flex flexDir="column" alignItems="center">
      <Heading m="2rem">Best deals now!</Heading>
      <Grid w="1300px" templateColumns={{base :"repeat(1 , 1fr)", md: "repeat(2, 1fr)", lg:"repeat(3 , 1fr)", xl:"repeat(4, 1fr)" }}>
        {sales.length>0 &&
        sales.map((game)=>(
          <GameCard
            key={game.gameID}
            name={game.title}
            picture={game.thumb}
            normalPrice={game.normalPrice}
            salePrice={game.salePrice}
            metacritic={game.metacriticScore}
            />
        ))
        }
        {!loading && <Flex m="4rem" alignItems="center" justifyContent="center"><Heading>Loading...</Heading></Flex>}
      </Grid>
    </Flex>
  )
}

export default Home