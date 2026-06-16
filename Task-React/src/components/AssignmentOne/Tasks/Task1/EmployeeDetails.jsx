
const EmployeeDetails = () => {

    const employeeDetails={
        name:"Prashanth",
        id:101,
        department:"HR",
        salary:25000
    }


  return (
    <div className="flex justify-center">

    <div className="bg-purple-400 h-100vh w-100 rounded-xl text-center p-10 text-white">
       <h1>Employee Details</h1>
        <h2>Employee Name: {employeeDetails.name}</h2>
        <h2>Employee ID: {employeeDetails.id}</h2>
        <h2>Department: {employeeDetails.department}</h2>
        <h2>Salary: {employeeDetails.salary}</h2>
    </div>
      </div>
  )
}

export default EmployeeDetails