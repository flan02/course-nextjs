//* response from backend only data

import { NextResponse, nextResponse } from "next/server";
//TODO nextResponse me permite retornar varios tipos de datos

export async function GET() {
  //const res = new Response("Response from backend");
  //* What can I do with NextResponse
  //extract params
  //query database
  //communicate with front end
  //communicate with file system
  //communicate with other services
  //paypal, stripe, aws, googleCloud, cloudinary (update files), etc
  //send emails
  //save api keys
  //return a response
  const nextRes = NextResponse.json({
    message: "getting data",
  });
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return NextResponse.json(data);
}

//! Navegador no me deja probar estas peticiones. Solo GET
//! En su lugar user POSTMAN
export function POST() {
  return nextResponse.json({ message: "creating data" });
}

export function PUT() {
  return nextResponse.json({ message: "updating data" });
}

export function DELETE() {
  return nextResponse.json({ message: "deleting data" });
}
