import { observer } from "mobx-react-lite";
import TodoStore from "../../stores/TodoStore";

function TodoList({ todos }: { todos: TodoStore }) {
  return (
    <ul>
      {todos.list.map((t) => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  );
}

export default observer(TodoList);
