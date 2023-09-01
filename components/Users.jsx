import Image from "next/image";
import Link from "next/link";

const Users = ({ users }) => {
  return (
    <>
      <ul>
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <li
              key={user.id}
              className="bg-slate-400 mb-2 py-8 px-4 rounded-md text-black flex justify-between"
            >
              <div>
                <figcaption className="text-xs">USER ID: {user.id}</figcaption>
                <h1 className="text-2xl pt-2">
                  {user.first_name} {user.last_name}
                </h1>
                <p className="text-slate-100">email: {user.email}</p>
              </div>
              <Image
                src={user.avatar}
                alt={user.last_name}
                width={200}
                height={200}
                className="rounded-full w-20"
              />
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Users;
