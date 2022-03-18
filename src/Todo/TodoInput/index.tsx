import { ChangeEvent, useState } from "react";
import TodoStore from "../../stores/TodoStore";

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
    <>
      <input value={newTodo} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add Todo</button>
    </>
  );
}
