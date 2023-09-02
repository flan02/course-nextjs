import { prisma } from "@/libs/prisma";

/*
async function loadTasks() {
  //* consulta bbdd: obteniendo de la base de datos directamente
  const tasks = await prisma.task.findMany();
  console.log("Prisma query to database", tasks);
  //* comunico con backend: haciendo una peticion (requiere ruta completa)
  const res = await fetch("http://localhost:3000/api/tasks"); // este codigo no llega al navegador, se ejecuta en el servidor
  const data = await res.json();
  console.log("Http request to backend API", data);
  //! Es indiferente pero si voy a armar un backend con Express por separado mejor hacer la peticion a la api
}
*/

async function loadTasks() {
  return await prisma.task.findMany();
}

export default async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);
  return (
    <section className="container mx-auto mt-8">
      <h1 className="w-max mx-auto text-8xl text-blue-400 mb-4">Tasks list</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-slate-900 flex flex-col p-3 mt-4 mx-2 border border-orange-200 hover:bg-slate-800 hover:cursor-pointer"
          >
            <h6 className="text-white text-xs">task: {task.id}</h6>
            <h2 className="font-bold text-2xl my-2 w-max mx-auto">
              {task.title.charAt(0).toUpperCase() + task.title.slice(1)}
            </h2>
            <p className="text-white text-lg">{task.description}</p>
            <h6 className="mt-2 text-xs">
              {new Date(task.createdAt).toLocaleDateString()}
            </h6>
          </div>
        ))}
      </div>
    </section>
  );
}
