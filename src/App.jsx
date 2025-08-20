import { Route, Routes } from "react-router-dom"
import Footer from "./Componenets/Footer"
import Home from "./Layout/HomeLayout"
import HomePage from "./Pages/HomePage"
import Aboutus from "./Pages/Aboutus"
import NotFound from "./Pages/NotFound"
import Signup from "./Pages/Signup"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<Aboutus/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    
    </>
  )
}

export default App
