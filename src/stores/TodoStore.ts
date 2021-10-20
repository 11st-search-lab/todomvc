import { makeObservable, observable, computed, action } from 'mobx';
import { ITodo } from '../types/todoTypes';
import RootStore from './RootStore';

class TodoStore {
  rootStore: RootStore;
  todoList = new Map();
  id: number;
  completed: boolean;

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      todoList: observable,
      id: observable,
      completed: observable,
      makeTodo: action,
      addTodo: action,
      deleteTodo: action,
      completeTodo: action,
      toggleTodoCompleted: action,
    });
    this.rootStore = rootStore;
    this.id = 0;
    this.completed = false;
  }

  makeTodo(todo: string) {
    this.id++;
    return { id: this.id, content: todo, completed: false };
  }

  addTodo(todo: string) {
    const newTodo = this.makeTodo(todo);
    //this.todoList.push(newTodo);
    this.todoList.set(this.id, newTodo);
  }

  deleteTodo(id: number) {
    this.todoList.delete(id);
  }

  completeTodo(id: number) {
    const todo = this.todoList.get(id);
    const newTodo = { ...todo, completed: true };
    this.todoList.set(id, newTodo);
  }

  toggleTodoCompleted(id: number) {
    const todo = this.todoList.get(id);
    const newTodo = { ...todo, completed: !todo?.completed };
    this.todoList.set(id, newTodo);
  }
  getTodoList() {
    return [...this.todoList.values()];
  }
}

export default TodoStore;
