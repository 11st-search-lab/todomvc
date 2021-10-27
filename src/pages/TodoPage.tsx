import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import useStore from '../hooks/useStore';
import { todoStorage } from '../utils/localStorage';
const TodoPage = () => {
  const { todoStore } = useStore();

  useEffect(() => {
    const todos = todoStorage.get();
    if (todos) todoStore.init();

    const location = window.location;
    const { pathname } = location;

    todoStore.setPath(pathname);
  }, []);

  return (
    <div>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
};

export default TodoPage;
