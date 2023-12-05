import { db } from "@/lib/db";
import type { Todo } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const todos = await db.todo.findMany();
  return NextResponse.json(todos, { status: 200 });
}

export async function POST(request: Request) {
  const body: Todo = await request.json();
  const createdTodo = await db.todo.create({
    data: {
      name: body.name,
    },
  });
  return NextResponse.json(createdTodo, { status: 201 });
}
