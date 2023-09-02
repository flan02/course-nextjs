"use client";
import { useRouter } from "next/navigation";

const handleRoute = (router, task) => {
  router.push(`/tasks/edit/${task}`);
};

function TaskCard({ task }) {
  const router = useRouter();
  return (
    <div
      onClick={() => handleRoute(router, task.id)}
      className="bg-slate-900 flex flex-col p-3 mt-4 mx-2 border border-orange-200 hover:bg-slate-800 hover:cursor-pointer"
    >
      <h6 className="text-white text-xs">task: {task.id}</h6>
      <h2 className="font-bold text-2xl my-2 w-max mx-auto">
        {task.title.charAt(0).toUpperCase() + task.title.slice(1)}
      </h2>
      <p className="text-white text-lg">{task.description}</p>
      <h6 className="mt-2 text-xs">
        {/* new Date(task.createdAt).toLocaleDateString() */}
      </h6>
    </div>
  );
}

export default TaskCard;
