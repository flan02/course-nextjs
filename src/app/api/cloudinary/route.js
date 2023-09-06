import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  const data = await req.formData();
  //console.log(data.get("any_name"));
  const image = data.get("any_name");
  if (!image)
    return NextResponse.error(new Error("no file uploaded", { status: 400 }));
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes); //.toString("base64");
  const filePath = path.join(process.cwd(), "public", image.name); //current working directory
  //console.log(filePath);
  await writeFile(filePath, buffer);
  return NextResponse.json("image uploaded");
}
