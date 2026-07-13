import { useNavigate } from "react-router-dom"

const AssignmentFive = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/counter")
    }
    const handleTask1=()=>{
        navigate("/studentnameupdate")
    }
    const handleTask2=()=>{
        navigate("/age")
    }
       const handleTask3=()=>{
        navigate("/theme")
    }





  return (
    <>

        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask}
        >Task1
        </button>

        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask1}
        >Task2
        </button>

        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask2}
        >Task3
        </button>
         <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask3}
        >Task5
        </button>
    </>
   

  )
}

export default AssignmentFive