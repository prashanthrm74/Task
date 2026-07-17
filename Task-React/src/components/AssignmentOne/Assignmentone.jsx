import { useNavigate } from "react-router-dom"

const Assignmentone = () => {

    const navigate=useNavigate();
     

    const handleTask1=()=>{
        navigate("/studentdetails")
    }

     const handleTask2=()=>{
        navigate("/employeedetails")
    }

    const handleTask3=()=>{
        navigate("/productdetails")
    }

     const handleTask4=()=>{
        navigate("/moviedetails")
    }
      const handleTask5=()=>{
        navigate("/companydetails")
    }



  return (
    <>

        <button className="px-5 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask1}
        >Task1
        </button>

        <button className="px-5 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask2}
        >Task2
        </button>

        <button className="px-5 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask3}
        >Task3
        </button>

        <button className="px-5 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask4}
        >Task4
        </button>

         <button className="px-5 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md m-2"
        onClick={handleTask5}
        >Task5
        </button>


    </>
   

  )
}

export default Assignmentone