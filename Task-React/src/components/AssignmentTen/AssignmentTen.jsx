import { useNavigate } from "react-router-dom"

const AssignmentTen = () => {

    const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/studentdata")
    }

     const handleTask1=()=>{
        navigate("/productdata")
    }

    


  return (
    <>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-5"
        onClick={handleTask}
        >Task 1
        </button>
         <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-5"
        onClick={handleTask1}
        >Task 2
        </button>

    </>
   

  )
}

export default AssignmentTen