import { useNavigate } from "react-router-dom"

const AssignmentSeven = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/userform")
    }


  return (
    <>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-5"
        onClick={handleTask}
        >Task1
        </button>

    </>
   

  )
}

export default AssignmentSeven