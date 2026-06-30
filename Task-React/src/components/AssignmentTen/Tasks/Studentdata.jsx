import { useState } from "react";

const Studentdata = () => {

  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    city: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(student);

    setStudent({
      name: "",
      age: "",
      course: "",
      city: "",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-purple-600 mb-2">
            Student Registration
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Fill in your details below
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={student.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={student.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Course
              </label>
              <input
                type="text"
                name="course"
                value={student.course}
                onChange={handleChange}
                placeholder="Enter your course"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                value={student.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg"
            >
              Register Student
            </button>
          </form>
        </div>

        {/* Student Details Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
            Student Details
          </h2>

          {submittedData ? (
            <div className="space-y-4">

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Name</span>
                <span>{submittedData.name}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Age</span>
                <span>{submittedData.age}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Course</span>
                <span>{submittedData.course}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">City</span>
                <span>{submittedData.city}</span>
              </div>

            </div>
          ) : (
            <div className="text-center text-gray-500">
              <div className="text-7xl mb-4">🎓</div>
              <p>No student registered yet.</p>
              <p className="text-sm mt-2">
                Fill the form and click <b>Register Student</b>.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Studentdata;