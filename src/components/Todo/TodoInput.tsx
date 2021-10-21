import React from 'react';
import { observer } from 'mobx-react';
import useStore from '../../hooks/useStore';
import { useState } from 'react';

const TodoInput = () => {
  const [inputState, setInputState] = useState<string>('');
  const { todoStore } = useStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputState(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') todoStore.addTodo(inputState);
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default observer(TodoInput);
