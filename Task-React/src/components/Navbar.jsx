
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
       
        <div className="w-full h-15 ">
        <div className="flex py-2 mx-4 gap-6" >
        <Link className="text-white hover:text-slate-300 font-medium" to={"/"}>Home</Link>
        <Link className="text-slate-100 hover:text-slate-300 font-medium"to={"/tasks"}>Tasks</Link>
        </div>
        </div>
        
  )
}

export default Navbar