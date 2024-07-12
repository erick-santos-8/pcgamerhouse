'use client'

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Menu,
  MenuButton,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaLaptopHouse } from 'react-icons/fa'

interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('rgba(255, 255, 255, 0.80)', 'rgba(0, 0, 0, 0.24)'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex>
            <Heading fontFamily="Share Tech" display="flex" flexDirection="row" justifyContent="space-between" fontSize={{base:"20px", md:"30px"}} transition=".3s"_hover={{color:"#FE4F00"}}>
              PcGamerHouse 
              <FaLaptopHouse/>
            </Heading>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                </MenuButton>

              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}