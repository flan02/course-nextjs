//TODO para que funcione este componente notfound cuando un usuario ingrese una ruta que no existe, se debe crear un archivo not-found.jsx en la carpeta app

import Link from "next/link";

export default function Notfound() {
  return (
    <>
      <section>
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link href="/">back</Link>
      </section>
    </>
  );
}
