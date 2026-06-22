import { useState } from "react"

const Theme = () => {

    const [isDarkMode,setIsDarkMode]=useState(false)

    const handleclick=()=>{
        setIsDarkMode(!isDarkMode)
    }




  return (
    <>
     <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDarkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
        <h1>Theme</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleclick}> {isDarkMode ? "Light Mode" : "Dark Mode"}</button>

    </div>
    
    </>
  )
}

export default Theme