import React from 'react';
import classNames from 'classnames';
import TodoList from './Todo/TodoList';
import Filter from './Filter';
import TodoCount from './Todo/TodoCount';
import TodoInput from './Todo/TodoInput';
const TodoApp = () => {
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <TodoInput />
      </header>
      <TodoList />
      <footer className="footer">
        <TodoCount />
        <Filter />
        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
};

export default TodoApp;
