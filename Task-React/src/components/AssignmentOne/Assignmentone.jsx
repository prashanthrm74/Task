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

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl mt-5 my-2 ml-5 mb-5 mr-3"
        onClick={handleTask1}
        >Task1
        </button>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-3"
        onClick={handleTask2}
        >Task2
        </button>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-3"
        onClick={handleTask3}
        >Task3
        </button>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-3"
        onClick={handleTask4}
        >Task4
        </button>

         <button className="bg-blue-600 text-white px-6 py-2 rounded-xl m-3"
        onClick={handleTask5}
        >Task5
        </button>


    </>
   

  )
}

export default Assignmentone