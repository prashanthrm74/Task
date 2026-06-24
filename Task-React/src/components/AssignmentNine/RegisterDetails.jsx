import { useState } from "react"


const RegisterDetails = () => {

    const [userData,setUserData]=useState({
        userName:"",userAge:"",userCity:""
    })

    const [saveData,setSaveData]=useState([])


const handleChange=(e)=>{

    setUserData({...userData,[e.target.name]:e.target.value})
    console.log(userData);
    
}

const handleSubmit=(e)=>{
    
    e.preventDefault();

    setSaveData([...saveData,userData])
    console.log(saveData);
    

}


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
                    <input type="text" name="userName" className="border rounded p-1 m-2" onChange={handleChange}/></td>
                </tr> 
                <tr>
                <td><label>Enter User Age</label> </td>
                <td><input type="text"  name="userAge" className="border rounded p-1 m-2" onChange={handleChange}/> </td>
                </tr>   
                <tr>
                <td><label>Enter User City</label></td>
                <td><input type="text"  name="userCity" className="border rounded p-1 m-2" onChange={handleChange}/>
                </td>
                </tr>

            
                <tr>
                    <td><input onClick={handleSubmit} type="submit" className="bg-blue-400 p-1 rounded justify-center "/></td>
                </tr>
       

                </thead>
                <tbody>

                </tbody>


            </table>               
            </form>
        </div>
        </div>
    </div>
  )
}

export default RegisterDetails