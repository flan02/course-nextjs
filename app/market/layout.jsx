import Navbar from "@/components/Navbar";
import Link from "next/link";

//? El nav sera visible en todos los archivos que esten dentro de la carpeta market
//* Podria crear un context que solo apliquen a los archivos dentro de la carpeta market

const MarketRoot = ({ children }) => {
  return (
    <>
      <Navbar />
      <nav>
        <h3>Section Market</h3>
        <ul>
          <li>
            <Link href="/market/categories">Categories</Link>
          </li>
          <Link href="/market/categories/technologies">Technologies</Link>
          <li>
            <Link href="/market/categories/sports">Sports</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default MarketRoot;
