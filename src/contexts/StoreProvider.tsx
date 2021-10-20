import React, { createContext, FC, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import RootStore from '../stores/RootStore';

export const StoreContext = createContext<RootStore>({} as RootStore);

export type StoreComponent = FC<{
  store: RootStore;
  children: ReactNode;
}>;
export const StoreProvider: StoreComponent = ({ children, store }): ReactElement => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.any,
};
