import { useNavigate } from "react-router-dom"

const AssignmentSix = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/object-state")
    }
 
  return (
    <>

       <button className="px-5 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask}
        >Task1
        </button>
    </>
   

  )
}

export default AssignmentSix