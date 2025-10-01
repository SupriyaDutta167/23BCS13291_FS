import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add a new task
  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input.trim(), completed: false }
    ]);
    setInput("");
  };

  // Toggle completion status
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>

      {/* Input + Add Button */}
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l-lg focus:outline-none"
          placeholder="Enter a task..."
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
