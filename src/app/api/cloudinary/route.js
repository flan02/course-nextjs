process.noDeprecation = true;
import { NextResponse } from "next/server";

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
    cloudinary.v2.uploader
      .upload_stream({}, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      })
      .end(buffer);
  });

  console.log(res); // cloudinary devuelve un objeto extenso con la informacion de la imagen
  return NextResponse.json({
    message: "image uploaded",
    url: res.secure_url,
  }); // retorno al frontend la url de la imagen [optional]
}
