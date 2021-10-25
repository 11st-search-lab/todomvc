import React from 'react';
import TodoCount from './TodoCount';
import Filter from '../Filter/';
import TodoClearButton from './TodoClearButton';

const Footer = () => {
  return (
    <footer className="footer">
      <TodoCount />
      <Filter />
      <TodoClearButton />
    </footer>
  );
};

export default Footer;
