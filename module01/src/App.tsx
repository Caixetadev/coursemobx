import TodoStore from "./stores/TodoStore";
import { TodoInput } from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";

import * as S from "./styles/global";

const todos = new TodoStore();

function App() {
  return (
    <S.Wrapper>
      <TodoInput todos={todos} />
      <TodoList todos={todos} />
      <S.GlobalStyles />
    </S.Wrapper>
  );
}

export default App;
