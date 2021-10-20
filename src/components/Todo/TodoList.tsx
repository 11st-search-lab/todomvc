import React from 'react';
import { observer } from 'mobx-react';
import TodoItems from './TodoItems';
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
          <TodoItems key={todo.id} content={todo.content} />
        ))}
      </ul>
    </section>
  );
};

export default observer(TodoList);
