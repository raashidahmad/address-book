import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers';

export const Store = createStore(Reducer, {}, applyMiddleware(thunk));
