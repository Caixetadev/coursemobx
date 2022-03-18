import TodoStore from "../../stores/TodoStore";

export function TodoList({ todos }: { todos: TodoStore }) {
  return (
    <ul>
      {todos.list.map((t) => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  );
}
