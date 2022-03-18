import { action, makeObservable, observable } from "mobx";

export interface ITodo {
  id: number;
  title: string;
  isDone: boolean;
}

class TodoStore {
  list: ITodo[] = [];

  constructor() {
    makeObservable(this, {
      list: observable,
      add: action,
      remove: action,
      toggle: action,
    });
  }

  add(title: string) {
    if (title.length < 3) return;

    this.list.push({
      id: Date.now(),
      title,
      isDone: false,
    });
  }

  toggle(todo: ITodo) {
    todo.isDone = !todo.isDone;
  }

  remove(todo: ITodo) {
    this.list = this.list.filter((t) => t.id !== todo.id);
  }
}

export default TodoStore;
