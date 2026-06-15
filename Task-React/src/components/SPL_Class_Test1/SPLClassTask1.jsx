import StudentProfile from "./Task1/StudentProfile"

const SPLClassTask1 = () => {

const studentDetails={

    name:"Prashanth",
    Age:25,
    Course:"React",
    City:"Chennai"

}

  return (
    <>

    <StudentProfile  
    name={studentDetails.name}
    age={studentDetails.Age}
    course={studentDetails.Course}
    city={studentDetails.City} />

    </>
  )
}

export default SPLClassTask1