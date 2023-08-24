import Image from "next/image";
import Link from "next/link";
//import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>NEXTJS COURSE</h1>
      <nav>
        <h1>Navbar</h1>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/market">Market</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
