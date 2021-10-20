import React from 'react';
const TodoList = () => {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" checked={true} />
            <label>{'todo title'}</label>
            <button className="destroy" />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TodoList;
