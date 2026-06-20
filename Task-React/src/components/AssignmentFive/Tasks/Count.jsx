import { useState } from "react"


const Count = () => {

const[count,setCount]=useState(0)

const handleIncrease=()=>{
    setCount(count+1);

}

const handleDecrease=()=>{
    setCount(count-1);

}

const handleReset=()=>setCount(0)

  return (
    <div className="flex justify-center">
    <div className="bg-black h-100 w-100 rounded-xl text-white flex flex-col">
        <h1 className="text-center font-bold mt-8">Counter Application: {count}</h1>
        <div className="flex mt-10">
        <button className="bg-amber-300 px-5 rounded-xl m-5 w-25 text-black" onClick={handleIncrease} >+</button>
        <button className="bg-amber-300 px-5 rounded-xl m-5 w-25  text-black" onClick={handleDecrease}>-</button>
        <button className="bg-amber-300 px-5 rounded-xl m-5 w-25 text-black" onClick={handleReset}>Reset</button>
        </div>

    </div>
    </div>
  )
}

export default Count