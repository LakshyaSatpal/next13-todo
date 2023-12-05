"use client";

import type { Todo } from "@prisma/client";

const Todos = ({ todos }: { todos: Array<Todo> }) => {
  return (
    <ul>
      {todos && todos.map((item: Todo) => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
};

export default Todos;
