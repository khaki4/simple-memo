import { combineReducers } from 'redux';
import memoReducer from "./memo";
import labelReducer from "./label";

const rootReducer = combineReducers({
  memo: memoReducer,
  label: labelReducer,
});

export default rootReducer;