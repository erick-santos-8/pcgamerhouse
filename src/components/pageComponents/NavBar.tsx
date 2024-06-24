import { Flex, Heading, Spacer } from '@chakra-ui/react'
import { FaLaptopHouse } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex background="rgba(0,0,0,0.28)" color="#fff">
      <Flex px="2rem">
        <Link to="/">
        <Flex as="button" color="#FE4F00" transition="0.4s"_hover={{color: "#FE6F00"}} h="80px" w="100%" alignItems="center">
          <Heading color="#fff" fontFamily='Share Tech'>PcGamerHouse</Heading>
          <FaLaptopHouse size="40px"/>
        </Flex>
        </Link>
        
      </Flex>
      <Spacer/>
    </Flex>
)
}

export default NavBar