import React from 'react';
import { observer } from 'mobx-react';
import useStore from '../../hooks/useStore';

const TodoClearButton = () => {
  const { todoStore } = useStore();

  const handleClearTodo = () => todoStore.deleteCompletedTodo();

  return (
    <button className="clear-completed" onClick={handleClearTodo}>
      Clear completed
    </button>
  );
};

export default observer(TodoClearButton);
