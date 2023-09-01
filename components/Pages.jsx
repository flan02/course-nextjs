//import Link from "next/link";

import Link from "next/link";

export default async function Pages() {
  //const users = await fetchUsers(2);
  return (
    <div className="flex items-center justify-between border-2 border-black bg-slate-300 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden"></div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-red-300 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </Link>
            <Link
              href="/users"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
