import { useNavigate } from "react-router-dom"

const AssignmentSeven = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/userform")
    }


  return (
    <>

       <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask}
        >Task
        </button>

    </>
   

  )
}

export default AssignmentSeven