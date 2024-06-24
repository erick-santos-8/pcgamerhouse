import { Flex, Grid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import GameCard  from "../components/dealsCard/GameCard"

const Home = () => {
  const [sales, setSales] = useState([])

  useEffect(()=>{
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json())
    .then((data)=>{
      console.log(data)
      setSales(data)
    })
    .catch((erro) => console.log(erro))
  }, [])
  return (
    <Flex>
      <Grid w="1300px">
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
      </Grid>
    </Flex>
  )
}

export default Home