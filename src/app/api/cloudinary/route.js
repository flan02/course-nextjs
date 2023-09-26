process.noDeprecation = true;
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

export async function GET() {
  //return NextResponse.redirect("/"); // redirect to home page
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve(
          NextResponse.json([
            {
              url_image:
                "https://res.cloudinary.com/dhbig9jt8/image/upload/v1694220519/jhoznuhqsfvyuer1cdvo.jpg",
              title: "Goliath",
              season: "4",
              chapter: "32",
              average: [6, 8, 9, 7],
              status: "finished",
            },
            {
              url_image:
                "https://res.cloudinary.com/dhbig9jt8/image/upload/v1694550303/foxshrqe5abuarkotdbp.webp",
              title: "Gotham",
              season: "5",
              chapter: "100",
              average: [6, 8, 9, 7],
              status: "finished",
            },
            {
              url_image:
                "https://res.cloudinary.com/dhbig9jt8/image/upload/v1694215111/n8afpnwnbxkxp60byxf8.jpg",
              title: "LOTR - the Rings of Power",
              season: "1",
              chapter: "8",
              average: [6, 8, 9, 7],
              status: "active",
            },
            {
              url_image:
                "https://res.cloudinary.com/dhbig9jt8/image/upload/v1694127466/okodgnx4drokvtcw8n6x.jpg",
              title: "House of Dragon",
              season: "1",
              chapter: "10",
              average: [6, 8, 9, 7],
              status: "active",
            },
          ]),
          3000
        )
      // END: abpxx6d04wxr
    );
  });
}

/*



  return NextResponse.json({
      movie1: {
              url_image:
                "https://res.cloudinary.com/dhbig9jt8/image/upload/v1694220519/jhoznuhqsfvyuer1cdvo.jpg",
              title: "Goliath",
              season: "4",
              chapter: "32",
              average: [6, 8, 9, 7],
              status: "finished",
            },
            movie2: {
              url_image:
                "https://res.cloudinary.com/dhbig9jt8/image/upload/v1694550303/foxshrqe5abuarkotdbp.webp",
              title: "Gotham",
              season: "5",
              chapter: "100",
              average: [10, 7, 5, 10, 8],
              status: "finished",
            },
            movie3: {
              url_image:
                "https://res.cloudinary.com/dhbig9jt8/image/upload/v1694215111/n8afpnwnbxkxp60byxf8.jpg",
              title: "LOTR - the Rings of Power",
              season: "1",
              chapter: "8",
              average: [5, 6, 7, 7, 8],
              status: "in production",
            },
            movie4: {
              url_image:
                "https://res.cloudinary.com/dhbig9jt8/image/upload/v1694127466/okodgnx4drokvtcw8n6x.jpg",
              title: "House of Dragon",
              season: "1",
              chapter: "8",
              average: [3, 6, 10, 9, 5],
              status: "in production",
            },
    url_image: [
              "https://res.cloudinary.com/dhbig9jt8/image/upload/v1694220519/jhoznuhqsfvyuer1cdvo.jpg",
              "https://res.cloudinary.com/dhbig9jt8/image/upload/v1694550303/foxshrqe5abuarkotdbp.webp",
              "https://res.cloudinary.com/dhbig9jt8/image/upload/v1694215111/n8afpnwnbxkxp60byxf8.jpg",
              "https://res.cloudinary.com/dhbig9jt8/image/upload/v1694127466/okodgnx4drokvtcw8n6x.jpg",
    ],
  });*/

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
  //! guardar en base de datos la url de la imagen.
  //! procesar imagen y editar.
  //* console.log(res); // cloudinary devuelve un objeto extenso con la informacion de la imagen

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
