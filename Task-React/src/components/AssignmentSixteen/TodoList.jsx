import { useState } from "react";

const TodoList = () => {

 
  const [datas, setDatas] = useState("");
  const [saveData, setSaveData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleClick = () => {
   
      // Add new item
      setSaveData((prev) => [...prev, datas]);


    setDatas("");
  };


  return (
    <>
      <div>
        <h1>Skills Section</h1>

        <input
          type="text"
          placeholder="Enter Skills"
          value={datas}
          onChange={(e) => setDatas(e.target.value)}
        />

        <button onClick={handleClick}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <div>
        <ol>
          {saveData.map((skill, index) => (
            <li key={index}>
              {skill}

              <button >
                Edit
              </button>

              <button>
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};




export default TodoList