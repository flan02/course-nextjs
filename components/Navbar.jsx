import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-300 mb-4 flex justify-between py-4 px-20 font-bold text-black">
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/about" className="pr-4">
            About
          </Link>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
