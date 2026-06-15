

const StudentProfile = ({name,age,course,city}) => {


  return (
    <div className="bg-amber-200 text-center h-100 flex flex-col items-center">
        <h1 className="text-xl font-bold underline mb-4">Student Profile</h1>
        <div className="bg-white shadow-md w-100 rounded-xl h-50">
        <div className="flex flex-col gap-2 mt-5"> 
        
        <h2>Student Name: {name}</h2>
        <h2>Student Age: {age}</h2>
        <h2>Student Course: {course}</h2>
        <h2>Student City: {city}</h2>
        </div>
        </div>
    </div>
  )
}

export default StudentProfile