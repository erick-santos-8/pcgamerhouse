import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NavBar from "./components/pageComponents/NavBar"
import { Box } from "@chakra-ui/react"

function App() {

  return (
    <Box bg="rgba(0, 0, 0, 0.8)" fontFamily='Anek Gurmukhi' color="#fff">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Box>
  )
}

export default App
