import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
//import styles from "./page.module.css";

//! App ignora cualquier archivos que no se llame page o layout
// ? Link reemplaza la etiqueta <a> y evita que se recargue la página

//TODO leer nextjs metadata para conocer todas las etiquetas que son admitidas.

//* El metadata de openGraph es leido por apps como facebook, twitter, whatsapp, etc.
//? Era las etiquetas antiguas metadata OG

//* Esto se ve desde la pestaña de network en el navegador y el description se ve en la pestaña de search
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

export default function Home() {
  return (
    <>
      <h1>NEXTJS COURSE</h1>
      <Navbar />
    </>
  );
}
