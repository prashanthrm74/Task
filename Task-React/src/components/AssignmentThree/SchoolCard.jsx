

const SchoolCard = ({ school }) => {


  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-600">
        {school.name}
      </h2>

      <p className="text-gray-500 mb-4">{school.city}</p>

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
  );
};

export default SchoolCard;