"use client";

import Navbar from "@/components/Navbar";

//! La etiqueta link solo redirecciona no puede ejecutar funciones
import Link from "next/link";
//! Los hooks no funcionan en el componente servidor
import { useRouter, useParams, useSearchParams } from "next/navigation";
//? useParams -> Obtiene los parametros de la url
//? useSearchParams -> Obtiene los parametros de la url en formato de objeto

export const metadata = {
  title: "About | HomePage",
  description: "Generated with nextjs",
};

const About = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        blanditiis ipsam sint saepe quod. Voluptas facilis incidunt enim libero
        sit quo, minus perspiciatis, nemo impedit beatae expedita, minima vitae
        deserunt.
      </p>
      {/*
      <Link href="/">
        <button className="bg-blue-400 px-3 py-2 ">Click</button>
      </Link>
      */}
      <button
        onClick={() => {
          //query to the server o bbdd. To redirect we use next/navigation
          //console.log("from client with useRouter");
          alert("Redirect from client");
          router.push("/");
        }}
        className="bg-blue-400 px-3 py-2 "
      >
        Click
      </button>
    </>
  );
};

export default About;
