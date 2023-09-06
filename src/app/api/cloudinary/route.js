import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
//import { v2 as cloudinary } from "cloudinary";
const cloudinary = require("cloudinary");
cloudinary.v2.config({
  cloud_name: "dhbig9jt8",
  api_key: "328731767241585",
  api_secret: "ZDTKVidB2BSkxi2L9qvnse6qAP4",
  secure: true,
});

export async function POST(req) {
  const data = await req.formData();
  const image = data.get("anyName");
  if (!image)
    return NextResponse.error(new Error("no file uploaded", { status: 400 }));
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const res = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, result) => {
        if (err) reject(err);
        resolve(result);
      })
      .end(buffer);
  });
  //! guardar en base de datos la url de la imagen.
  //! procesar imagen y editar.
  console.log(res); // cloudinary devuelve un objeto extenso con la informacion de la imagen
  //TODO const uploadedImage = res.secure_url
  //* Podemos almacenar la url de la imagen en una base de datos.

  return NextResponse.json({
    message: "image uploaded",
    url: res.secure_url,
  }); // retorno al frontend la url de la imagen [optional]
}

/*
* UPLOAD TO FILE SYSTEM
export async function POST(req) {
  const data = await req.formData();
  console.log(data.get("any_name"));
  const image = data.get("any_name");
  if (!image)
    return NextResponse.error(new Error("no file uploaded", { status: 400 }));
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes); //.toString("base64");
  const filePath = path.join(process.cwd(), "public", image.name); //current working directory
  console.log(filePath);
  await writeFile(filePath, buffer);
  return NextResponse.json("image uploaded");
}
*/
