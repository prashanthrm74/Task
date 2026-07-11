import { useRef } from "react"

const UseRefInput = () => {

const inputRef=useRef(null)

const paraRef=useRef("")

const handleChange=()=>{
    paraRef.current.innerText=inputRef.current.value
    
}

const handleClick=()=>{
    
     paraRef.current.style.color="blue"
    paraRef.current.innerText = inputRef.current.value;
     inputRef.current.value=""
}

  return (
    <>
    <div className="bg-gray-300 h-100">
        <input ref={inputRef} placeholder="Enter here " type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Click here</button>
        <p ref={paraRef}></p>
    </div>
    
    </>
  )
}

export default UseRefInput