import React from 'react';

interface ITodo {
  content: string;
}
const TodoItems = ({ content }: ITodo) => {
  return (
    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" checked={true} />
        <label>{content}</label>
        <button className="destroy" />
      </div>
    </li>
  );
};

export default TodoItems;
