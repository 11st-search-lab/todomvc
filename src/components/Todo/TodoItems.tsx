import React from 'react';
import { observer } from 'mobx-react';
import useStore from '../../hooks/useStore';
import { ITodo } from '../../types/todoTypes';

const TodoItems = ({ content, completed, id }: ITodo) => {
  const { todoStore } = useStore();

  const handleCancelButtonClick = () => todoStore.deleteTodo(id);
  const handleCheckboxClick = () => todoStore.toggleTodoCompleted(id);

  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onClick={handleCheckboxClick} />
        <label>{content}</label>
        <button className="destroy" onClick={handleCancelButtonClick} />
      </div>
    </li>
  );
};

export default observer(TodoItems);
