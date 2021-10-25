import { makeObservable, observable, computed, action } from 'mobx';
import { ITodo } from '../types/todoTypes';
import RootStore from './RootStore';
import { todoStorage } from '../utils/localStorage';
class TodoStore {
  rootStore: RootStore;
  todoList = new Map();
  id: number;
  isCompleted: boolean;

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      todoList: observable,
      id: observable,
      isCompleted: observable,
      makeTodo: action,
      addTodo: action,
      deleteTodo: action,
      deleteCompletedTodo: action,
      completeTodo: action,
      toggleIsCompleted: action,
    });

    this.rootStore = rootStore;
    this.id = 0;
    this.isCompleted = false;
  }

  makeTodo(todo: string) {
    this.id++;
    return { id: this.id, content: todo, isCompleted: false };
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
      const { isCompleted } = todo;
      isCompleted && this.todoList.delete(id);
    }

    todoStorage.set(this.todoList);
  }

  completeTodo(id: number) {
    const todo = this.todoList.get(id);
    const newTodo = { ...todo, isCompleted: true };

    this.todoList.set(id, newTodo);
    todoStorage.set(this.todoList);
  }

  toggleIsCompleted(id: number) {
    const todo = this.todoList.get(id);
    const newTodo = { ...todo, isCompleted: !todo?.isCompleted };

    this.todoList.set(id, newTodo);
    todoStorage.set(this.todoList);
  }

  getTodoList() {
    return [...this.todoList.values()];
  }
}

export default TodoStore;
