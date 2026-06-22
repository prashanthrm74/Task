import { useState } from "react";
import Age from "../../AssignmentFive/Tasks/Age";


const ObjectState = () => {

  const [user, setUser] = useState({
    name: "Prashanth",
    age: 25,
    city: "Chennai",
  });

  const updateUser=()=>{
    setUser({
        ...user,city:"Coimbatore"
    })
  }


  return (
    <>
    <div  className="p-5 bg-black text-white">
        <h1>Object State</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p >City: {user.city}</p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={updateUser}>Update</button>
    </div>

    </>
  )
}

export default ObjectState