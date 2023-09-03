import Link from "next/link";

function NavbarTask() {
  return (
    <nav className="bg-slate-900">
      <div className="container py-3 mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className="font-bold text-3xl text-slate-300 hover:text-slate-200">
            Movies and TV Shows
          </h3>
        </Link>
        <ul className="flex gap-x-4 text-lg font-bold">
          <li>
            <Link className="text-slate-300 hover:text-slate-200" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-300 hover:text-slate-200"
              href="/newtask"
            >
              New Task
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarTask;
