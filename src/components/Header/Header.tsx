import React from 'react';
import TodoInput from '../TodoList/TodoInput';

const Header = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoInput />
    </header>
  );
};

export default Header;
