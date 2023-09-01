import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch(`https://reqres.in/api/users?page=2`);
  const users = await res.json();
  console.log(users.data); //consultar en la doc las props que se pueden usar
  await new Promise((resolve) => setTimeout(resolve, 2000)); //* Simulamos una peticion lenta
  return users.data; // arreglo de usuarios
}

export default async function PageUsers() {
  const users = await fetchUsers();
  return (
    <div>
      <h1 className="text-5xl text-center text-blue-100 py-10 mt-32">Users</h1>
      <Users users={users} />
    </div>
  );
}
