import { useNavigate } from "react-router-dom"

const AssignmentThree = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/schoollist")
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

export default AssignmentThree