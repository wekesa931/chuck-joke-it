import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';

export const containerStore = (initialStateFull: any) => {
  const stateStore = applyMiddleware(thunk)(createStore);
  return stateStore(rootReducer, initialStateFull);
};