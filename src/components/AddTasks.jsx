import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-200 rounded-md shadow space-y-4 p-6 flex flex-col gap-3 mt-6">
      <Input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Please fill in both fields");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        >
        Add Task
      </Button>
    </div>
  );
}

export default AddTasks;
