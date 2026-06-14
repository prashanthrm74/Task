import { useNavigate } from "react-router-dom";

const SPLClassTest1 = () => {

 const navigate=useNavigate();
     

    const handleTask=()=>{
        navigate("/splclass1-task1")
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

export default SPLClassTest1