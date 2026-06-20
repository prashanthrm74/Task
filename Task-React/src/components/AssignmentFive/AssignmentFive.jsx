import { useNavigate } from "react-router-dom"

const AssignmentFive = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/counter")
    }
    const handleTask1=()=>{
        navigate("/studentnameupdate")
    }
    const handleTask2=()=>{
        navigate("/age")
    }




  return (
    <>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-5"
        onClick={handleTask}
        >Task1
        </button>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-5"
        onClick={handleTask1}
        >Task2
        </button>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-5"
        onClick={handleTask2}
        >Task3
        </button>

    </>
   

  )
}

export default AssignmentFive