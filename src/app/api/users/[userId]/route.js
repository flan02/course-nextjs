import { NextResponse } from "next/server";
// TODO Similar al front end

export async function GET(req, { params }, res) {
  console.log(req); //* req: nos da informacion de la peticion
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await response.json();
  return NextResponse.json(data);
}
