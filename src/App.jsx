import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "This is the first task",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is the second task",
      completed: true,
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is the third task",
      completed: false,
    },
  ]);

  function onTaskClick(TaskId) {
    const newTasks = tasks.map(task => {
      if (task.id === TaskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTask(TaskId) { 
    const newTasks = tasks.filter(task => task.id !== TaskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w[600px]">
        <h1 className="text-3xl font-bold">Tasks Manager</h1>
        <AddTasks />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask} />
      </div>
    </div>
  );
}

export default App;
  