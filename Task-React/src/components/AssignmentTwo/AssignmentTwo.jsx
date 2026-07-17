import { useNavigate } from "react-router-dom"

const AssignmentTwo = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/assignment2-task1")
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

export default AssignmentTwo