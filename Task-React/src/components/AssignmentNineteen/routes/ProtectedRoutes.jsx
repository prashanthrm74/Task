import { Navigate } from "react-router-dom"


const ProtectedRoutes = ({children}) => {

    const user=JSON.parse(localStorage.getItem("currentuser"))

  return user ? children : <Navigate to={"/routeapp/loginpage"} />
   
}

export default ProtectedRoutes