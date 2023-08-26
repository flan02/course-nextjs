import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar p-20 bg-black text-yellow-100">
      <Link href="/">
        <h1 className="text-3xl font-bold">Navbar stylized by us</h1>
      </Link>
      <ul>
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
