import { ChangeEvent, FormEvent, useState } from "react";
import TodoStore from "../../../stores/TodoStore";

import * as S from "./style";

export function TodoInput({ todos }: { todos: TodoStore }) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const value = String(formData.get("todo-input") || "");

    todos.add(value);
    formElement.reset();
  }

  return (
    <S.TodoFrom onSubmit={handleSubmit}>
      <S.Input name="todo-input" placeholder="Add todo..." />
      <S.Button type="submit">Add Todo</S.Button>
    </S.TodoFrom>
  );
}
