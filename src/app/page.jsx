//"use client"; //! Por defecto nextjs ejecuta el codigo del lado del servidor, esto es para ejecutarlo del lado cliente
//TODO todos los hijos de este componente se ejecutaran del lado cliente
//! Importante podemos dejar el componente padre en el servidor y los hijos que necesitemos en el frontend le agregamos el 'use client' en su archivo

import Navbar from "@/components/Navbar";
import Users from "@/components/Users";
import Posts from "./posts/page";
//import styles from "./page.module.css";

//? Los metadatos se ejecutan solo en el servidor
export const metadata = {
  title: "Course NextJS HomePage",
  description: "Generated with nextjs",
  keywords: ["nextjs", "reactjs", "javascript", "flan02"],
  generator: "NextJS",
  applicationName: "NextJS Course",
  referrer: "no-referrer", // origin-when-cross-origin
  authors: [
    { name: "flan02", email: "chanivetdan@hotmail.com" },
    { name: "sam sepiol", email: "xbox_dan@hotmail.com" },
  ],
  colorScheme: "light dark",
  viewport: "width=device-width, initial-scale=1.0",
  creator: "flan02",
  publisher: "flan02",
  formatDetection: {
    telephone: "false",
    email: "false",
    address: "false",
  },
};

/* 
 * Requiere del 'use client' para funcionar
 ! window.locaStorage.getItem("anything") -> Tampoco tenemos definido el objeto window en el servidor, por lo tanto no funcionara
*/

//? La el componente padre se ejecuta en el backend
export default function Home() {
  return (
    <>
      <h1>NEXTJS COURSE</h1>
      <Navbar />

      {/* Users es un componente Client */}
      <Users />
      {/*
      //? No funcionara el componente porq viene del servidor y la funcion se ejecuta del lado cliente
      //! Soluciones el onclick deberia ser backend, si es frontend usar 'use client'
      <section>
        <button onClick={() => {}}>Click</button>
      </section>
      */}
      {/* <Posts /> */}
    </>
  );
}
