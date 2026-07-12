import { useState } from "react"
import UserContext from "../context/UserContext"

const UserProvider = ({children}) => {

const [Data,setData]=useState({
  name: "Sudhan",
  email: "sudhan@gmail.com",
  role: "Trainer"
})

  return (
    <>
    <UserContext.Provider value={{Data}}>

        {children}

    </UserContext.Provider>
    
    </>
  )
}

export default UserProvider