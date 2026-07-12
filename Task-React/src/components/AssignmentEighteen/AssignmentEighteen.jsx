import { useNavigate } from "react-router-dom"

const AssignmentEighteen = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/context")
    }

   

    return (
    <>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-5"
        onClick={handleTask}
        >Task 1
        </button>
    

    </>
   

  )
}

export default AssignmentEighteen