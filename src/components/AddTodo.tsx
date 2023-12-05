"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import type { Todo } from "@prisma/client";

const AddTodo = ({ onAddTodo }: { onAddTodo: (todo: Todo) => void }) => {
  const [todoText, setTodoText] = useState("");

  function handleTodoChange(e: ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    setTodoText(text);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (todoText.trim().length === 0) return;
    const response = await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: todoText }),
    });
    const createdTodo = await response.json();
    onAddTodo(createdTodo);
    setTodoText("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Todo"
          className="border px-2 py-3"
          onChange={handleTodoChange}
          value={todoText}
        />
        <button
          className="bg-zinc-200 text-black px-2 py-3
        "
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
