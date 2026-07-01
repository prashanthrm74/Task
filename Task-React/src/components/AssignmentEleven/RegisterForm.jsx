import { useState } from "react"

const RegisterForm = () => {

const [registerData,setRegisterData]=useState({username:"",useremail:"",userpassword:""})
const [saveData,setSaveData]=useState([])


const handleChange=(e)=>{
  
  const {name,value}=e.target

  setRegisterData((prev)=>({...prev,[name]:value}))

}

 const handleSubmit = (e) => {
    e.preventDefault();

    if(registerData.username==="" ||registerData.useremail==="" || registerData.userpassword ===""){
      alert("Please fill the details ")
      return
    }
    
    const data=JSON.parse(localStorage.getItem("userData")) || []

    const checkname= data.find((e)=>e.username === registerData.username)
    
    if(checkname){
      alert("User Name Already Exists")
      return 

    }

    const checkEmail= data.find((e)=>e.useremail === registerData.useremail)

    if(checkEmail){
      alert("Email Already Exists");
      return
    }
    if(registerData.userpassword.length < 8){
      alert("Password must be atlease 8 characters")
      return
    }

    data.push(registerData)

    localStorage.setItem("userData", JSON.stringify(data));

    setSaveData(data)
    console.log(data);
    

    setRegisterData({username:"",useremail:"",userpassword:""})


  }
    
  return (
    <>
    <div className="h-screen bg-emerald-100 flex justify-center">
      <div className="bg-white flex flex-col h-100 w-100 m-4 rounded-xl shadow-2xl">
        <div className="m-5 ">

      <form onSubmit={handleSubmit} >

      <h1 className="text-center font-semibold p-2">User Registration</h1>
      <div className="flex flex-col justify-center">
     
      <input type="text" name="username" placeholder="Enter User Name" value={registerData.username} onChange={handleChange} className="border border-gray-400 p-1 w-full mb-4 rounded-lg"  />
      <input type="email" name="useremail" placeholder="Enter Email" value={registerData.useremail} onChange={handleChange}  className="border border-gray-400 p-1 w-full mb-4 rounded-lg "/>
      <input type="password" name="userpassword" placeholder="Enter Password" value={registerData.userpassword} onChange={handleChange}  className="border border-gray-400 p-1 w-full mb-4 rounded-lg" />
      <div className="flex justify-center m-4">
      <button  className="bg-blue-500 w-25 p-2 rounded-lg text-white text-center">Submit</button>
      </div>
      </div>
      </form>
      </div>
      </div>

    </div>
    
    
    </>
  )
}

export default RegisterForm