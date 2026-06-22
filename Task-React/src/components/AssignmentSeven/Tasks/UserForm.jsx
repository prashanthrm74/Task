import { useState } from "react";

const UserForm = () => {
  const [studentName, setStudentName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      studentName,
      employeeName,
      age,
      email,
      mobile,
      city,
    });
  };

  return (
    <>
    <div className="bg-white w-100 m-10 rounded-xl">
      <h1 className="text-center mt-4 font-bold">User Registration Form</h1>

      <form onSubmit={handleSubmit} className="m-4" >
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Mobile:</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <br />

        <button className="bg-blue-600 w-25 p-1 rounded-xl text-center mb-5" type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Details</h2>

          <p>Student Name: {submittedData.studentName}</p>
          <p>Employee Name: {submittedData.employeeName}</p>
          <p>Age: {submittedData.age}</p>
          <p>Email: {submittedData.email}</p>
          <p>Mobile: {submittedData.mobile}</p>
          <p>City: {submittedData.city}</p>
        </div>
      )}
      </div>
    </>
  );
};

export default UserForm;