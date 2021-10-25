import React from 'react';
import { observer } from 'mobx-react';
import useStore from '../../hooks/useStore';

const TodoCount = () => {
  const { todoStore } = useStore();

  const count = todoStore.getTodoList().filter((todo) => !todo.isCompleted).length;

  return (
    <span className="todo-count">
      <strong>{count}</strong> item left
    </span>
  );
};

export default observer(TodoCount);
