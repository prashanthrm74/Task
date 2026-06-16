
const StudentDetails = () => {

 const studentDetails={
        name:"Prashanth",
        course:"Mern Backend",
        city:'chennai',
        Institute:"SLA"
    }


  return (
    <div className="flex justify-center">
    
    <div className="bg-orange-400 h-100vh w-100 text-center p-10 text-white rounded-xl">
      <h1>Student Details</h1>
        <h2>Studentname: {studentDetails.name}</h2>
        <h2>Course: {studentDetails.course}</h2>
        <h2>City: {studentDetails.city}</h2>
        <h2>Institute: {studentDetails.Institute}</h2>
    </div>
    </div>
  )
}

export default StudentDetails