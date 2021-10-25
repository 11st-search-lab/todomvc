const todoStorage = {
  set: (data: unknown) => localStorage.setItem('todos', JSON.stringify(data) as string),
  get: () => {
    const todo = localStorage.getItem('todos');
    return todo && JSON.parse(todo);
  },
};

export { todoStorage };
