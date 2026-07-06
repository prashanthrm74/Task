import { useEffect, useState } from "react"

const StudentSearch = () => {

const [search,setSearch]=useState("");
const [result,setResult]=useState([])

   const students = [
    "Prashanth",
    "Sudhan",
    "Sudhakar",
    "Rahul",
    "Karthik",
    "Vignesh",
    "Arun",
    "Suresh",
  ];

  useEffect(()=>{

    const filterData=students.filter((e)=>e.toLowerCase().includes(search.toLowerCase()))

    setResult(filterData)
    console.log(result);
    

  },[search])
    


  return (
    <>
    <div className="bg-red-300 h-screen">
    <div className="flex justify-center">
        <input className=" m-10 border border-gray-300 rounded-lg px-4 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500 w-50 bg-white text-center" type="text" placeholder="Search Student Name" onChange={(e)=>setSearch(e.target.value)} />
    </div>
    
        <div  className="flex items-center flex-col">
            {
         search && result.map((e,i)=>(

            <div key={i}>{e}</div>
            

        ))
        
    }
        </div>

    </div>
    
    </>
  )
}

export default StudentSearch