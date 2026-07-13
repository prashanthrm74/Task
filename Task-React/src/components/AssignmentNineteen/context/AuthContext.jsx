import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({children}) => {

  const [user,setuser]=useState(null)
  const navigate=useNavigate()

  useEffect(()=>{

    const currUser= JSON.parse(localStorage.getItem("currentuser")) || []

    if(currUser){

      setuser(currUser)

    }



  },[])

const login=(data)=>{

  localStorage.setItem("currentuser",JSON.stringify(data))
  setuser(data)
  
}

const logOut=()=>{

  localStorage.removeItem("currentuser")
  setuser(null)
  navigate("/routeapp/loginpage");

}


  return (
    <>
    <AuthContext.Provider value={{user,logOut,login}}>
        
        {children}

    </AuthContext.Provider>
    
    </>
  )
}

