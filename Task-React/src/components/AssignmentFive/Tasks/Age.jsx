import { useState } from "react"

const Age = () => {


    const[age,setAge]=useState(18)
    
    const handleIncrease=()=>setAge(age+1)


  return (
    <div className="bg-pink-200 w-100 h-100 ml-100 rounded-xl">
        <h1 className="ml-30 pt-10 font-bold text-orange-500">Age:{age}</h1>
        <button className="bg-black text-white px-5 rounded-xl m-5 w-50" onClick={handleIncrease}>Increment Age</button>
    
    
    </div>
  )
}

export default Age