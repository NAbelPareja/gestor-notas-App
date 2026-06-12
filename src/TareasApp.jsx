import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { Notas } from "./pages/Notas"
import { Navbar } from "./components/Navbar"
import "./styles/main.css"


export const TareasApp = () => {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="notas" element ={<Notas></Notas>} ></Route>
        <Route path="/*" element = {<Navigate to="/home"></Navigate>}></Route>
    </Routes>
    </>
  )
}
