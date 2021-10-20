import React from 'react';
import TodoPage from './pages/TodoPage';
import RootStore from './stores/RootStore';
import { StoreProvider } from './contexts/StoreProvider';

const App = () => {
  const rootStore = new RootStore();
  return (
    <StoreProvider store={rootStore}>
      <TodoPage />
    </StoreProvider>
  );
};

export default App;
