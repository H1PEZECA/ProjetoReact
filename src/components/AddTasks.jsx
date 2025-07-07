import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-200 rounded-md shadow space-y-4 p-6 flex flex-col gap-3 mt-6">
      <input
        type="text"
        placeholder="Task Title"
        className="border border-slate-400 text-black rounded-md px-4 py-2"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        className="border border-slate-400 text-black rounded-md px-4 py-2"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Please fill in both fields");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-400 text-white p-2 rounded-md">
        Add Task
      </button>
    </div>
  );
}

export default AddTasks;
