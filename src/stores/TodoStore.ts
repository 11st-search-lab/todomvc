import { makeObservable, observable, computed, action } from 'mobx';
import RootStore from './RootStore';
import { todoStorage } from '../utils/localStorage';
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
      deleteCompletedTodo: action,
      completeTodo: action,
      toggleCompleted: action,
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

    this.todoList.set(this.id, newTodo);
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
    const todo = this.todoList.get(id);
    const newTodo = { ...todo, completed: true };

    this.todoList.set(id, newTodo);
    todoStorage.set(this.todoList);
  }

  toggleCompleted(id: number) {
    const todo = this.todoList.get(id);
    const newTodo = { ...todo, completed: !todo?.completed };

    this.todoList.set(id, newTodo);
    todoStorage.set(this.todoList);
  }

  toggleTotalCompleted(flag: boolean) {
    for (const [id, todo] of this.todoList.entries()) {
      const newTodo = { ...todo, completed: flag };
      this.todoList.set(id, newTodo);
    }

    todoStorage.set(this.todoList);
  }

  getTodoList() {
    return [...this.todoList.values()];
  }
}

export default TodoStore;
