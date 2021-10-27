import { makeObservable, observable, action } from 'mobx';
import RootStore from './RootStore';
import { todoStorage } from '../utils/localStorage';
import { ITodo } from '../types/todoTypes';
class TodoStore {
  rootStore: RootStore;
  todoList = new Map();
  id: number;
  path: string;

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      todoList: observable,
      id: observable,
      path: observable,
      makeTodo: action,
      addTodo: action,
      deleteTodo: action,
      deleteCompletedTodo: action,
      completeTodo: action,
      toggleCompleted: action,
    });

    this.rootStore = rootStore;
    this.id = 0;
    this.path = '/';
  }

  init() {
    const prevTodo = todoStorage.get();
    this.todoList = new Map([...prevTodo]);
  }

  setPath(path: string) {
    this.path = path;
  }

  makeTodo(todo: string): ITodo {
    this.id++;
    return { id: this.id, content: todo, completed: false };
  }

  addTodo(todo: string) {
    const newTodo = this.makeTodo(todo);

    this.todoList.set(this.id, newTodo);
    todoStorage.set(this.todoList);
  }

  editTodo(id: number, todo: string) {
    const prevTodo = this.todoList.get(id);
    const newTodo = { ...prevTodo, content: todo };

    this.todoList.set(id, newTodo);
    todoStorage.set(this.todoList);
  }

  deleteTodo(id: number) {
    this.todoList.delete(id);
    todoStorage.set(this.todoList);
  }

  deleteCompletedTodo() {
    for (const [id, todo] of this.todoList.entries()) {
      const { completed } = todo;
      completed && this.todoList.delete(id);
    }

    todoStorage.set(this.todoList);
  }

  completeTodo(id: number) {
    const prevTodo = this.todoList.get(id);
    const newTodo = { ...prevTodo, completed: true };

    this.todoList.set(id, newTodo);
    todoStorage.set(this.todoList);
  }

  toggleCompleted(id: number) {
    const prevTodo = this.todoList.get(id);
    const newTodo = { ...prevTodo, completed: !prevTodo?.completed };

    this.todoList.set(id, newTodo);
    todoStorage.set(this.todoList);
  }

  toggleTotalCompleted(flag: boolean) {
    for (const [id, prevTodo] of this.todoList.entries()) {
      const newTodo = { ...prevTodo, completed: flag };
      this.todoList.set(id, newTodo);
    }

    todoStorage.set(this.todoList);
  }

  getTodoList() {
    return [...this.todoList.values()];
  }
}

export default TodoStore;
