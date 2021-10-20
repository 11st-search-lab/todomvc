import { useContext } from 'react';
import RootStore from '../stores/RootStore';
import { StoreContext } from '../contexts/StoreProvider';

const useStore = (): RootStore => useContext(StoreContext);

export default useStore;
