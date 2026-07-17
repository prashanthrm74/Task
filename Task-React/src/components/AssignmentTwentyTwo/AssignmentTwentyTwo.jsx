import { useNavigate } from "react-router-dom"

const AssignmentTwentyTwo = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/productsearch")
    }



  return (
    <>

       <button className="px-5 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask}
        >Task
        </button>

    </>
   

  )
}

export default AssignmentTwentyTwo