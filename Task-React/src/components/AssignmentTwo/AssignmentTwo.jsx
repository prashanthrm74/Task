import { useNavigate } from "react-router-dom";

const AssignmentTwo = () => {

        const navigate=useNavigate();

    const handleTask2=()=>{
        navigate("/task2")
    }

  return (
       <>
            
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-5"
        onClick={handleTask2}
        >Task1
        </button>

    </>
  )
}

export default AssignmentTwo