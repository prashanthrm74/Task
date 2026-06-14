import { useNavigate } from "react-router-dom"

const Assignmentone = () => {

    const navigate=useNavigate();
     

    const handleTask1=()=>{
        navigate("/task1")
    }



  return (
    <>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-5"
        onClick={handleTask1}
        >Task1
        </button>

    </>
   

  )
}

export default Assignmentone