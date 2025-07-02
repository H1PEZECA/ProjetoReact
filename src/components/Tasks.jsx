import { ChevronRightIcon } from "lucide-react";
function Tasks(props) {
  return (
    <ul className="space-y-3 mt-9 bg-slate-200 p-6 rounded-md shadow">
      {props.tasks.map(task => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
                  {task.title}
                  {task.completed ? " (Completed) " : " (Pending)"}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
