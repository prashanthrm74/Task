import { useState } from "react"


const StudentNameUpdate = () => {

const [name,setName]=useState("Sudhan")

const handleClick=()=>{
    if(name=="Sudhan"){
        setName("Ravi")
    }
    else{
    setName("Sudhan")
    }

   

}

  return (
    <div >
        <h1 className="text-black ml-20 font-bold">{name}</h1>
        <button className="bg-purple-300 px-5 rounded-xl m-5 w-50 text-black" onClick={handleClick}>Click to Change</button>
    </div>
  )
}

export default StudentNameUpdate