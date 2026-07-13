import { useNavigate } from "react-router-dom";

const SPLClassTest1 = () => {

 const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/splclass1-task1")
    }


  return (
       <>

        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask}
        >Task
        </button>

    </>
  )
}

export default SPLClassTest1