import React from 'react';
import { observer } from 'mobx-react';
import useStore from '../../hooks/useStore';

const TodoCount = () => {
  const { todoStore } = useStore();

  const count = todoStore.getTodoList().filter((todo) => !todo.isCompleted).length;
  const countUnit = count > 1 ? 'items' : 'item';

  return (
    <span className="todo-count">
      <strong>{count}</strong> {countUnit} left
    </span>
  );
};

export default observer(TodoCount);
