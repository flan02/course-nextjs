"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//* redireccion con useRouter ya qe cuando termino quiero cambiar de pagina

function NewTask({ params }) {
  //console.log(params); accedemos desde la consola del servidor
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //TODO useEffect se ejecuta cuando carga la pagina
  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    }
    router.prefetch(false); //TODO para que no se quede en la pagina de edicion
    router.refresh(); //TODO para que se refresque la pagina y actualice el estado
    router.push("/");
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-8">
          {params.id ? "Edit Task" : "Add Task"}
        </h1>
        <form
          className="bg-slate-800 p-10 w-3/4 sm:w-1/2"
          onSubmit={handleSubmit}
        >
          <label htmlFor="title" className="font-bold text-sm">
            Task title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
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
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name=""
            id="description"
            rows="3"
            cols="50"
            placeholder="Describe your task"
            className="border border-gray-400 p-2 mb-4 w-full text-blue-700"
          ></textarea>
          <div className="w-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {params.id ? "Edit" : "New"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewTask;
