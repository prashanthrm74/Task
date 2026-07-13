import { useNavigate } from "react-router-dom"

const AssignmentThirteen = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/studentsearch")
    }

     const handleTask1=()=>{
        navigate("/digitalclock")
    }


    return (
    <>

        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask}
        >Task 1
        </button>
         <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask1}
        >Task 2
        </button>

    </>
   

  )
}

export default AssignmentThirteen