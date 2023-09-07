import { NextResponse } from "next/server";
import { prisma } from "@/config/prisma";
export async function GET() {
  const tasks = await prisma.task.findMany();
  //console.log(tasks);
  return NextResponse.json(tasks);
}

export async function POST(req) {
  const { title, description } = await req.json();
  //console.log(data);
  const newTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(newTask);
}
