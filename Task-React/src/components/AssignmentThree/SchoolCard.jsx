

const SchoolCard = ({ school }) => {


  return (
    
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
      
      <h2 className="text-2xl font-bold text-blue-600 ">
        {school.name}
      </h2>      
      <p className="text-gray-500 mb-4">{school.city}</p>

      
      
      <div className="flex">

        <div className="flex flex-col">
      <p>
        <span className="font-semibold">Principal:</span>{" "}
        {school.principal}
      </p>

      <p>
        <span className="font-semibold">Students:</span>{" "}
        {school.students}
      </p>

      <p>
        <span className="font-semibold">Teachers:</span>{" "}
        {school.teachers}
      </p>
       

      </div>
      
        <div className="ml-5">
        <h3 className="font-semibold mb-2">
          Courses Offered
        </h3>

        <div className=" flex flex-wrap gap-2 flex-col">
          {school.courses.map((course, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm text-center"
            >
              {course}
            </span>
          ))}
        </div>
        </div>
        </div>
  
      </div>
    

  );
};

export default SchoolCard;