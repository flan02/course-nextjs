import { NextResponse } from "next/server";
//TODO Similar al front end: con params puedo extraer los parametros de la url dinamicamente
//TODO query en url: ?name=juan&age=20

//TODO crear datos, los enviamos desde el cliente al servidor. [Request body]

export async function GET(req, { params }, res) {
  //console.log(req); //* req: nos da informacion de la peticion

  const { searchParams } = new URL(req.url);
  console.log(searchParams); //* searchParams: nos da informacion de los querys
  console.log(searchParams.get("apellido")); // acceder a un query en especifico

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await response.json();
  return NextResponse.json(data);
}
