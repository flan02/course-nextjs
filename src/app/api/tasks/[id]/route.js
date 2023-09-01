import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(req, { params }) {
  let taskFound = await prisma.task.findUnique({
    where: {
      id: Number(params.id), //* hay que convertir el param a number
    },
  });
  if (taskFound === null) task = "The task doesn't exist";
  return NextResponse.json(taskFound);
}

export async function PUT(req, { params }) {
  const data = await req.json();
  let taskUpdated = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data,
  });
  if (taskUpdated === null) taskUpdated = "The task doesn't exist";
  return NextResponse.json(taskUpdated);
}

export async function DELETE(req, { params }) {
  try {
    let taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    console.log(taskRemoved); //* visualizo la tarea que se elimino
    if (taskRemoved === null) taskRemoved = "The task doesn't exist";
    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
