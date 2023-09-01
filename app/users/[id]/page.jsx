import Writer from "@/components/Writer";
import Link from "next/link";

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const user = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000)); //* Simulamos una peticion lenta
  return user.data;
}

export default async function UserPage({ params }) {
  //console.log(params);
  const user = await getUser(params.id);
  return (
    <div className="flex flex-col">
      <Writer elementType="p" text="This user data is coming from REQRES API" />
      <div className="bg-red-300 p-4 rounded-2xl">
        {user ? (
          <div>
            <h1>
              DATA FROM USER ID:{" "}
              <span className="text-slate-800 text-2xl">
                &nbsp; &nbsp;{user.id}
              </span>
            </h1>
            <br />
            <pre className="text-emerald-100 text-lg">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        ) : (
          <>
            <h1 className="text-red-500 text-xl">User not found</h1>
            <h2 className="text-red-500 text-xl">
              {params.id} is not a valid user
            </h2>
          </>
        )}
      </div>
      <Link href="/users" className="text-blue-100 text-xl text-center py-8">
        back
      </Link>
    </div>
  );
}
