import { ChangeEvent, useState } from "react";
import TodoStore from "../../../stores/TodoStore";

import * as S from "./style";

export function TodoInput({ todos }: { todos: TodoStore }) {
  const [newTodo, setNewTodo] = useState("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  function handleButtonClick() {
    todos.add(newTodo);
    setNewTodo("");
  }

  return (
    <S.TodoInputGroup>
      <S.Input value={newTodo} onChange={handleInputChange} />
      <S.Button onClick={handleButtonClick}>Add Todo</S.Button>
    </S.TodoInputGroup>
  );
}
