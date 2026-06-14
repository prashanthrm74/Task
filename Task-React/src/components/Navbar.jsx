
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
       
        <div className="w-full h-15 bg-transparent">
        <div className="flex py-2 mx-4 " >
        <Link className="bg-indigo-600 w-20 text-center p-2 mx-2 text-white rounded-xl" to={"/"}>Home</Link>
        <Link className="bg-indigo-600 w-20 text-center p-2 mx-2 text-white rounded-xl" to={"/tasks"}>Tasks</Link>
        </div>
        </div>
        
  )
}

export default Navbar