import React from 'react';
import classNames from 'classnames';
import TodoList from '../components/Todo/TodoList';
import Filter from '../components/Filter';
import TodoCount from '../components/Todo/TodoCount';
import TodoInput from '../components/Todo/TodoInput';
const TodoPage = () => {
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

export default TodoPage;
