import { useState } from "react";

const TodoList = () => {
  const [todoData, setTodoData] = useState("");
  const [saveData, setSaveData] = useState([]);
  const [editId,setEditId]=useState(null)
  

  const handleChange = (e) => {
    setTodoData(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (todoData.trim() === "") return;

    setSaveData((prev) => [...prev, {
      id: Date.now(),
      task: todoData
    },]);
    setTodoData("");
  };

const handleEdit=(userid)=>{

  const editData=saveData.find((e)=>e.id===userid)

  setTodoData(editData.task)
  setEditId(userid)

}

const handleDelete=(userid)=>{
  
  const deleteData=saveData.filter((e)=>e.id !== userid)

  setSaveData(deleteData)
  setEditId(null)

  

}

const handleUpdate=(e)=>{
  e.preventDefault()

   const updateData = saveData.map((item) =>
    item.id === editId
      ? { ...item, task: todoData }
      : item
  );

  setSaveData(updateData)
  setEditId(null)
  setTodoData("")
}

const handleCancel=(e)=>{
  e.preventDefault()
  setEditId(null)
  setTodoData("")
}

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-white to-purple-100 flex justify-center items-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          📝 Todo List
        </h1>

        {/* Input */}
        <form
          className="flex gap-3 mb-6"
          
        >
          <input
            type="text"
            placeholder="Enter Task..."
            value={todoData}
            onChange={handleChange}
            className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition"
          />

         {editId===null ?  <button
         onClick={handleClick}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
          >
            Add
          </button>:<div><button
          onClick={handleUpdate}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
          >
            Update
          </button>
          <button  onClick={handleCancel}
           className="bg-gray-300 text-red-600 w-5 rounded-l m-2 ">X</button></div>}
        </form>

        {/* Todo List */}
        <div>
          {saveData.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks added yet.
            </p>
          ) : (
            <ul className="space-y-4">
              {saveData.map((task, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <span className="font-medium text-gray-800">
                    {i + 1}. {task.task}
                  </span>

                  <div className="flex gap-2">
                    <button onClick={()=>handleEdit(task.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-lg transition"
                    >
                      Edit
                    </button>

                    <button onClick={()=>handleDelete(task.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;