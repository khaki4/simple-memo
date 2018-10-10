import produce from 'immer';

// follow rules of 'https://github.com/erikras/ducks-modular-redux'
const BASE_PREFIX = 'MEMO/';

// Actions
export const TEST = `${BASE_PREFIX}TEST`;
export const REQUEST_MEMOS = `${BASE_PREFIX}REQUEST_MEMOS`;
export const SUCCESS_MEMOS = `${BASE_PREFIX}SUCCESS_MEMOS`;
export const FAILURE_MEMOS = `${BASE_PREFIX}FAILURE_MEMOS`;

// Action Creators
export const requestMemos = (payload) => ({ type: REQUEST_MEMOS, payload });
export const successMemos = (payload) => ({ type: SUCCESS_MEMOS, payload });
export const failureMemos = (payload) => ({ type: FAILURE_MEMOS, payload });

// helper function
const _successMemos = (_action, _draft) => {
  _draft.memos = _action.payload;
}

// reducer
const initialState = {
  memos: [],
};
const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SUCCESS_MEMOS:
        return _successMemos(action, draft);
      default:
        return state;
    }
  });
};

// selector


export default reducer;