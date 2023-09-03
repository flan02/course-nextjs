"use client";

import { useRouter } from "next/navigation";

function ButtonTask() {
  const router = useRouter();
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={() => router.push("/newtask")}
        type="button"
        className="border border-white my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Task
      </button>
    </div>
  );
}

export default ButtonTask;
