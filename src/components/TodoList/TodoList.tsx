import React from 'react';
import { observer } from 'mobx-react';
import TodoItem from './TodoItem';
import useStore from '../../hooks/useStore';

const TodoList = () => {
  const { todoStore } = useStore();
  const todoList = todoStore.getTodoList();

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} content={todo.content} completed={todo.isCompleted} id={todo.id} />
        ))}
      </ul>
    </section>
  );
};

export default observer(TodoList);
