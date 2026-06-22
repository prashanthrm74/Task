import { useState } from "react";

const ClassComponent = () => {
  // Counter State
  const [count, setCount] = useState(0);

  // Object State
  const [user] = useState({
    name: "Prashanth",
    age: 25,
    city: "Chennai",
  });

  // Array State
  const [skills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
  ]);

  // Array of Objects State
  const [students] = useState([
    {
      id: 1,
      name: "Prashanth",
      course: "React",
    },
    {
      id: 2,
      name: "Rahul",
      course: "Node.js",
    },
    {
      id: 3,
      name: "Kumar",
      course: "MongoDB",
    },
  ]);

  return (
    <div className="p-5 space-y-6">

      {/* Task 1 */}
      <div>
        <h1 className="text-2xl font-bold">
          Hello React
        </h1>
      </div>

      {/* Task 3 */}
      <div>
        <h2 className="font-bold">useState Syntax</h2>
        <p>
          const [state, setState] = useState(initialValue)
        </p>
      </div>

      {/* Task 4 */}
      <div>
        <h2 className="font-bold">Counter Program</h2>

        <h3>Count: {count}</h3>

        <button
          className="bg-green-500 text-white px-3 py-1 rounded mr-2"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>

      {/* Task 5 */}
      <div>
        <h2 className="font-bold">Object using useState</h2>

        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>
      </div>

      {/* Task 6 */}
      <div>
        <h2 className="font-bold">Array using useState</h2>

        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Task 7 */}
      <div>
        <h2 className="font-bold">
          Array of Objects using map()
        </h2>

        {students.map((student) => (
          <div
            key={student.id}
            className="border p-2 my-2 rounded"
          >
            <h3>{student.name}</h3>
            <p>{student.course}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ClassComponent;