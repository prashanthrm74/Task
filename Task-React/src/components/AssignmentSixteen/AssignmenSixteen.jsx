import { useNavigate } from "react-router-dom"

const AssignmentSixteen = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/todolist")
    }

   

    return (
    <>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-5"
        onClick={handleTask}
        >Todo list
        </button>
    

    </>
   

  )
}

export default AssignmentSixteen