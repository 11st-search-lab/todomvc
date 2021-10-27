import React from 'react';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import useStore from '../../hooks/useStore';
import { ITodo } from '../../types/todoTypes';

const TodoItem = ({ content, completed, id }: ITodo) => {
  const [isChecked, setIsChecked] = useState<boolean>(completed);
  const [renderFlag, setRenderFlag] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(content);
  const { todoStore } = useStore();

  useEffect(() => {
    if (todoStore.path === '/completed') {
      completed ? setRenderFlag(true) : setRenderFlag(false);
    } else if (todoStore.path === '/active') {
      completed ? setRenderFlag(false) : setRenderFlag(true);
    } else {
      setRenderFlag(true);
    }
  }, []);

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditedTodo(value);
  };
  const handleTodoOnBlur = () => {
    setIsEditing(!isEditing);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(!isEditing);
      todoStore.editTodo(id, editedTodo);
    }
  };

  const handleCheckboxChange = () => {
    todoStore.toggleCompleted(id);
    setIsChecked(!isChecked);
  };

  const handleITodoDoubleClick = () => setIsEditing(!isEditing);

  const handleCancelButtonClick = () => todoStore.deleteTodo(id);

  const handleTodoClick = (e: React.MouseEvent) => {
    console.log('click');
  };

  const renderTodo = () =>
    isEditing ? (
      <input
        className={classNames({ edit: isEditing })}
        type="text"
        autoFocus={true}
        value={editedTodo}
        onChange={handleTodoChange}
        onBlur={handleTodoOnBlur}
        onKeyPress={handleKeyPress}
      />
    ) : (
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={handleCheckboxChange} />
        <label onDoubleClick={handleITodoDoubleClick}>{content}</label>
        <button className="destroy" onClick={handleCancelButtonClick} />
      </div>
    );

  return renderFlag ? (
    <li className={classNames({ completed: completed }, { editing: isEditing })} onClick={handleTodoClick}>
      {renderTodo()}
    </li>
  ) : (
    <></>
  );
};

export default observer(TodoItem);
