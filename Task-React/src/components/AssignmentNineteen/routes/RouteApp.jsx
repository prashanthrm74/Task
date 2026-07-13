import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"

import ProtectedRoutes from "./ProtectedRoutes"

import HomePage from "../pages/HomePage"

const RouteApp = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Register/>} />
    <Route path='loginpage' element={<Login/>} />
    <Route path='homepage' element={<ProtectedRoutes><HomePage/></ProtectedRoutes>} />
    

    </Routes>
    
    </>
  )
}

export default RouteApp