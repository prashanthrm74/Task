import { useNavigate } from "react-router-dom"

const AssignmentSeventeen = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/useref")
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

export default AssignmentSeventeen