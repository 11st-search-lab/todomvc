import React from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react';
import TodoItem from './TodoItem';
import useStore from '../../hooks/useStore';

const TodoList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { todoStore } = useStore();
  const { completed } = todoStore;
  const todoList = todoStore.getTodoList();

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    todoStore.toggleTotalCompleted(isChecked);
  };

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        defaultChecked={isChecked}
        onClick={handleCheckboxClick}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} content={todo.content} completed={todo.completed} id={todo.id} />
        ))}
      </ul>
    </section>
  );
};

export default observer(TodoList);
