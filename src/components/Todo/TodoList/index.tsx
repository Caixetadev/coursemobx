import { observer } from "mobx-react-lite";
import TodoStore, { ITodo } from "../../../stores/TodoStore";

import * as S from "./style";

function TodoList({ todos }: { todos: TodoStore }) {
  function handleToggleTodo(t: ITodo) {
    todos.toggle(t);
  }

  function handleRemoveTodo(t: ITodo) {
    todos.remove(t);
  }

  return (
    <S.TodoList>
      {todos.list.map((t) => (
        <S.Li key={t.id}>
          {console.log(t)}
          <S.Label isDone={t.isDone} htmlFor={String(t.id)}>
            {t.title}
          </S.Label>

          <S.ButtonRemove isDone={t.isDone} onClick={() => handleRemoveTodo(t)}>
            remove
          </S.ButtonRemove>

          <S.Button isDone={t.isDone} onClick={() => handleToggleTodo(t)}>
            <input type="checkbox" id={String(t.id)} readOnly tabIndex={-1} />
          </S.Button>
        </S.Li>
      ))}
    </S.TodoList>
  );
}

export default observer(TodoList);
