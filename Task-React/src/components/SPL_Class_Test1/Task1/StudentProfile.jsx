

const StudentProfile = ({name,age,course,city}) => {
  return (
    <div className="bg-amber-200 text-center h-100">
        <h2>Student Name:{name}</h2>
        <h2>Student Age:{age}</h2>
        <h2>Student Course:{course}</h2>
        <h2>Student City:{city}</h2>
    </div>
  )
}

export default StudentProfile