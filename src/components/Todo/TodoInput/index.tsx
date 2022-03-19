import { ChangeEvent, FormEvent, useState } from "react";
import TodoStore from "../../../stores/TodoStore";

import * as S from "./style";

export function TodoInput({ todos }: { todos: TodoStore }) {
  const [newTodo, setNewTodo] = useState("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    todos.add(newTodo);
    setNewTodo("");
  }

  return (
    <S.TodoFrom onSubmit={handleSubmit}>
      <S.Input value={newTodo} onChange={handleInputChange} />
      <S.Button type="submit">Add Todo</S.Button>
    </S.TodoFrom>
  );
}
