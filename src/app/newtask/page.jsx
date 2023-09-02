"use client";
import { useRouter } from "next/navigation";
//* redireccion con useRouter ya qe cuando termino quiero cambiar de pagina

function NewTask() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Se puede trabajar con esta info en un State
    const title = e.target.title.value;
    const description = e.target.description.value;
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    router.push("/");
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-8">Add Task</h1>
        <form
          className="bg-slate-800 p-10 w-3/4 sm:w-1/2"
          onSubmit={handleSubmit}
        >
          <label htmlFor="title" className="font-bold text-sm">
            Task title
          </label>
          <input
            type="text"
            name=""
            id="title"
            className="border border-gray-400 p-2 mb-4 w-full text-blue-700"
            placeholder="Title"
          />
          <label htmlFor="description" className="font-bold text-sm">
            Task description
          </label>
          <textarea
            name=""
            id="description"
            rows="3"
            cols="50"
            placeholder="Describe your task"
            className="border border-gray-400 p-2 mb-4 w-full text-blue-700"
          ></textarea>
          <div className="w-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              New
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewTask;
