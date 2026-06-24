import { useNavigate } from "react-router-dom"

const AssignmentEight = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/usercard")
    }


  return (
    <>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-5"
        onClick={handleTask}
        >Task
        </button>

    </>
   

  )
}

export default AssignmentEight