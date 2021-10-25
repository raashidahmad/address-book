import { combineReducers } from 'redux';
import { userStateReducer } from '../action';

const Reducer = combineReducers({
    userState: userStateReducer
});

export default Reducer;