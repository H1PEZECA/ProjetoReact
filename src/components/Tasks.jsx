import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function Tasks(props) {

  const navigate = useNavigate();
  
  function onSeeDetails(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-3 mt-4 bg-slate-200 p-6 rounded-md shadow">
      {props.tasks.map(task => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-white w-full p-2 rounded-md ${task.completed ? "line-through" : ""}`}>
                  {task.title}
          </button>
          <Button
            onClick={() => onSeeDetails(task)}
            > 
            <ChevronRightIcon />
          </Button>
          <Button className="bg-slate-400 text-white p-2 rounded-md">
            <TrashIcon onClick={() => props.onDeleteTask(task.id)} />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
