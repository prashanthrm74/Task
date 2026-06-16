import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
    < div className="bg-gray-400 flex h-15 justify-between">

    <Logo/>
    <Links/>

    </div>
    

    </>
  )
}

export default Nav


const Logo=()=>{

    return(
        <>
        <div className="w-15 mx-5 ">
            <img src="./Logo.png" />

        </div>
        </>
    )
}


const Links=()=>{

    return (
        <>
        <div className="flex" >

            <Link className="bg-gray-800 text-white h-8 w-20 text-center p-1 rounded-xl m-5">Home</Link>
            <Link className="bg-gray-800 text-white h-8 w-20 text-center p-1 rounded-xl m-5">Course</Link>
            <Link className="bg-gray-800 text-white h-8 w-20 text-center p-1 rounded-xl m-5">Batch</Link>
            <Link className="bg-gray-800 text-white h-8 w-20 text-center p-1 rounded-xl m-5">About</Link>
            <Link className="bg-gray-800 text-white h-8 w-20 text-center p-1 rounded-xl m-5">Contact</Link>
        
        </div>
        
        </>
    )

}