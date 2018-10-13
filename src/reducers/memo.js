import produce from 'immer';
import _keyBy from 'lodash/keyBy';

// follow rules of 'https://github.com/erikras/ducks-modular-redux'
const BASE_PREFIX = 'MEMO/';

// Actions
export const REQUEST_CREATE_MEMO = `${BASE_PREFIX}REQUEST_CREATE_MEMO`;
export const SUCCESS_CREATE_MEMO = `${BASE_PREFIX}SUCCESS_CREATE_MEMO`;
export const FAILURE_CREATE_MEMO = `${BASE_PREFIX}FAILURE_CREATE_MEMO`;

export const REQUEST_MEMOS_LIST = `${BASE_PREFIX}REQUEST_MEMOS_LIST`;
export const SUCCESS_MEMOS_LIST = `${BASE_PREFIX}SUCCESS_MEMOS_LIST`;
export const FAILURE_MEMOS_LIST = `${BASE_PREFIX}FAILURE_MEMOS_LIST`;

export const REQUEST_MEMO_BY_ID = `${BASE_PREFIX}REQUEST_MEMO_BY_ID`;
export const SUCCESS_MEMO_BY_ID = `${BASE_PREFIX}SUCCESS_MEMO_BY_ID`;
export const FAILURE_MEMO_BY_ID = `${BASE_PREFIX}FAILURE_MEMO_BY_ID`;

export const REQUEST_UPDATE_MEMO = `${BASE_PREFIX}REQUEST_UPDATE_MEMO`;
export const SUCCESS_UPDATE_MEMO = `${BASE_PREFIX}SUCCESS_UPDATE_MEMO`;
export const FAILURE_UPDATE_MEMO = `${BASE_PREFIX}FAILURE_UPDATE_MEMO`;

export const REQUEST_DELETE_MEMO = `${BASE_PREFIX}REQUEST_MEMO_DELETE`;
export const SUCCESS_DELETE_MEMO = `${BASE_PREFIX}SUCCESS_DELETE_MEMO`;
export const FAILURE_DELETE_MEMO = `${BASE_PREFIX}FAILURE_DELETE_MEMO`;

export const SET_CHECKED_MEMOS_IDS = `${BASE_PREFIX}SET_CHECKED_MEMOS_IDS`;
export const SET_SELECTED_MEMOS_ID = `${BASE_PREFIX}SET_SELECTED_MEMOS_ID`;

// Action Creators
export const requestCreateMemo = (title, content) => ({ type: REQUEST_CREATE_MEMO, payload: { title, content } });
export const successCreateMemo = (payload) => ({ type: SUCCESS_CREATE_MEMO, payload });
export const failureCreateMemo = (payload) => ({ type: FAILURE_CREATE_MEMO, payload });

export const requestMemosList = () => ({ type: REQUEST_MEMOS_LIST });
export const successMemosList = (payload) => ({ type: SUCCESS_MEMOS_LIST, payload });
export const failureMemosList = (payload) => ({ type: FAILURE_MEMOS_LIST, payload });

export const requestMemoById = (id) => ({ type: REQUEST_MEMO_BY_ID, payload: id });
export const successMemoById = (payload) => ({ type: SUCCESS_MEMO_BY_ID, payload });
export const failureMemoById = (payload) => ({ type: FAILURE_MEMO_BY_ID, payload });

export const requestUpdateMemo = (id, title, content) => ({ type: REQUEST_UPDATE_MEMO, payload: { id, title, content } });
export const successUpdateMemo = (payload) => ({ type: SUCCESS_UPDATE_MEMO, payload });
export const failureUpdateMemo = (payload) => ({ type: FAILURE_UPDATE_MEMO, payload });

export const requestDeleteMemo = (id) => ({ type: REQUEST_DELETE_MEMO, payload: id });
export const successDeleteMemo = (payload) => ({ type: SUCCESS_DELETE_MEMO, payload });
export const failureDeleteMemo = (payload) => ({ type: FAILURE_DELETE_MEMO, payload });

export const setCheckedMemosIds = (payload) => ({ type: SET_CHECKED_MEMOS_IDS, payload });
export const setSelectedMemoId = (memoId) => ({ type: SET_SELECTED_MEMOS_ID, payload: memoId });

// helper function
const _successMemosList = (_action, _draft) => {
  _draft.memosList = _action.payload;
  _draft.memosListById = _keyBy(_action.payload, '_id');
};
const _setCheckedMemosIds = (_action, _draft) => {
  _draft.checkedMemoIds = _action.payload;
};
const _setSelectedMemoId = (_action, _draft) => {
  _draft.selectedMemoId = _action.payload;
};

// reducer
const initialState = {
  memosList: [],
  memosListById: {},
  checkedMemoIds: [],
  selectedMemoId: '',
};
const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SUCCESS_MEMOS_LIST:
        return _successMemosList(action, draft);
      case SET_CHECKED_MEMOS_IDS:
        return _setCheckedMemosIds(action, draft);
      case SET_SELECTED_MEMOS_ID:
        return _setSelectedMemoId(action, draft);
      default:
        return state;
    }
  });
};

// selector


export default reducer;