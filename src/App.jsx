import { Route, Routes } from "react-router-dom"
import Footer from "./Componenets/Footer"
import Home from "./Layout/HomeLayout"
import HomePage from "./Pages/HomePage"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
    
    </>
  )
}

export default App
