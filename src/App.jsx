import { useEffect, useState } from "react";
import { v4 } from "uuid";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    //CHAMAR API
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      //PEGAR OS DADOS QUE ELA RETORNA
      const data = await response.json();
      console.log(data);
      //PERSISTIR OS DADOS NO STATE
      setTasks(
        data.map(task => ({
          id: task.id,
          title: task.title,
          description: task.title,
          completed: task.completed,
        }))
      );
    };
    fetchTasks();
  }, []);
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

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w[600px]">
        <Title>Tasks Manager</Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}
export default App;
