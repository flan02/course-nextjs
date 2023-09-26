import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar py-20 text-orange-100 bg-slate-800">
      <Link href="/">
        <h1 className="text-2xl xl:text-3xl font-bold">Nextjs 13.4</h1>
      </Link>
      <ul className="text-xs xl:text-2xl">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/market">Market</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
