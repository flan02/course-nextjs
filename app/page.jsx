import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
//import styles from "./page.module.css";

//! App ignora cualquier archivos que no se llame page o layout
// ? Link reemplaza la etiqueta <a> y evita que se recargue la página

export default function Home() {
  return (
    <>
      <h1>NEXTJS COURSE</h1>
      <Navbar />
    </>
  );
}
