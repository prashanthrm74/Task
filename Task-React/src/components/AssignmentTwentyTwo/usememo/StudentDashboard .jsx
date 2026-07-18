import { useMemo, useState } from "react";

const StudentDashboard = () => {
  const [theme, setTheme] = useState(false);

  const students = [
    { id: 1, name: "Prashanth", placed: true },
    { id: 2, name: "Rahul", placed: false },
    { id: 3, name: "Karthik", placed: true },
    { id: 4, name: "Arun", placed: false },
    { id: 5, name: "Vignesh", placed: true },
    { id: 6, name: "Suresh", placed: false },
  ];

  const statistics = useMemo(() => {
    console.log("Calculating Student Statistics...");

    const totalStudents = students.length;
    const placedStudents = students.filter(
      (student) => student.placed
    ).length;
    const unplacedStudents = totalStudents - placedStudents;

    return {
      totalStudents,
      placedStudents,
      unplacedStudents,
    };
  }, [students]);

  const handleThemeChange = () => {
    setTheme((prev) => !prev);
  };

  return (
    <div
      style={{
        backgroundColor: theme ? "#222" : "#fff",
        color: theme ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Student Dashboard</h2>

      <button onClick={handleThemeChange}>
        {theme ? "Light Mode" : "Dark Mode"}
      </button>

      <hr />

      <h3>Total Students : {statistics.totalStudents}</h3>
      <h3>Placed Students : {statistics.placedStudents}</h3>
      <h3>Unplaced Students : {statistics.unplacedStudents}</h3>

      <hr />

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            border: "1px solid gray",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <h4>{student.name}</h4>
          <p>
            Status :{" "}
            {student.placed ? "✅ Placed" : "❌ Unplaced"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;