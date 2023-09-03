//TODO para que funcione este componente notfound cuando un usuario ingrese una ruta que no existe, se debe crear un archivo not-found.jsx en la carpeta app

import Link from "next/link";

export default function Notfound() {
  return (
    <section className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center">
      <div>
        <h1 className="xl:text-7xl text-5xl font-bold">404 | Page not found</h1>
      </div>
      <Link
        className="border border-white my-8 bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        href="/"
      >
        back
      </Link>
    </section>
  );
}
