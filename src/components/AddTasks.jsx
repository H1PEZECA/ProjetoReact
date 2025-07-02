function AddTasks() {
  return (
    <div className="bg-slate-200 rounded-md shadow space-y-4 p-6 flex flex-col gap-3 mt-6">
      <input type="text" placeholder="Task Title" className=" border border-slate-400  text-black rounded-md px-4 py-2"/>
      <input type="text" placeholder="Task Description" className=" border border-slate-400  text-black rounded-md px-4 py-2" />
      <button className="bg-slate-400 text-white p-2 rounded-md">Add Task</button>
    </div>
  );
}
export default AddTasks;
