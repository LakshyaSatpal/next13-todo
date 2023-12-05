"use client";
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";
import type { Todo } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:3000/api/todo/", {
        next: {
          revalidate: 30,
        },
      });
      const data = await response.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  const handleAddTodo = (createdTodo: Todo) => {
    setTodos((state) => [...state, createdTodo]);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-3xl font-bold">Lakshya's Todo App</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} />
    </div>
  );
}
