import { combineReducers } from 'redux';
import memoReducer from "./memo";

const rootReducer = combineReducers({
  memo: memoReducer
});

export default rootReducer;