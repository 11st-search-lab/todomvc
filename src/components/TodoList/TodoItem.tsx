import React from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import useStore from '../../hooks/useStore';
import { ITodo } from '../../types/todoTypes';

const TodoItem = ({ content, completed, id }: ITodo) => {
  const [checked, setChecked] = useState(completed);
  const { todoStore } = useStore();

  const handleCancelButtonClick = () => todoStore.deleteTodo(id);
  const handleCheckboxChange = () => {
    todoStore.toggleCompleted(id);
    setChecked(!checked);
  };

  return (
    <li className={classNames({ completed: completed })}>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={completed} onChange={handleCheckboxChange} />
        <label>{content}</label>
        <button className="destroy" onClick={handleCancelButtonClick} />
      </div>
    </li>
  );
};

export default observer(TodoItem);
