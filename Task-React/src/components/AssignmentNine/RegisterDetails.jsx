import { useState } from "react"


const RegisterDetails = () => {

    const [userData,setUserData]=useState({
        userName:"",userAge:"",userCity:""
    })

    const [saveData,setSaveData]=useState([])


const handleChange=(e)=>{
    const {name,value}=e.target

    setUserData({...userData,[name]:value})
    console.log(userData);
    
}

const handleSubmit=(e)=>{
    
    e.preventDefault();

    const updatedData=[...saveData,userData]

    localStorage.setItem("usedata",JSON.stringify(updatedData));

    setSaveData(updatedData);

    alert("Registed Successfully");

    setUserData({
        userName:"",userAge:"",userCity:""
    })
  

}
  console.log(saveData);  

  return (
    <div className="bg-white min-h-screen">
        <h1 className="text-black text-center font-bold">Register Form</h1>
        <div className="flex justify-center">
        <div className="bg-pink-200 h-60 w-100 p-5 rounded">
        
            <form>
            <table>
                <thead>
               <tr>
                <td>
                    <label>Enter User Name</label></td>
                <td>
                    <input type="text" name="userName" value={userData.userName} className="border rounded p-1 m-2" onChange={handleChange}/></td>
                </tr> 
                <tr>
                <td><label>Enter User Age</label> </td>
                <td><input type="text"  name="userAge" value={userData.userAge}  className="border rounded p-1 m-2" onChange={handleChange}/> </td>
                </tr>   
                <tr>
                <td><label>Enter User City</label></td>
                <td><input type="text"  name="userCity" value={userData.userCity}  className="border rounded p-1 m-2" onChange={handleChange}/>
                </td>
                </tr>

            
                <tr>
                    <td>
                        <button onClick={handleSubmit} className="bg-blue-400 p-1 rounded ">Submit</button>
                        </td>
                </tr>
       

                </thead>
                <tbody>

                </tbody>


            </table>               
            </form>
        </div>
            
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col">
          {
        saveData.map((e,i)=>(
        
                <div className="text-black text-center font-bold bg-indigo-400 w-50 h-20 rounded flex m-2" key={i}>
                    <h2>Name:{e.userName}</h2>
                    <h2>Age:{e.userAge}</h2>
                    <h2>City:{e.userCity}</h2>
                </div>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default RegisterDetails