import produce from 'immer';
import _keyBy from 'lodash/keyBy';

// follow rules of 'https://github.com/erikras/ducks-modular-redux'
const BASE_PREFIX = 'LABEL/';

// Actions
export const REQUEST_CREATE_LABEL = `${BASE_PREFIX}REQUEST_CREATE_LABEL`;
export const SUCCESS_CREATE_LABEL = `${BASE_PREFIX}SUCCESS_CREATE_LABEL`;
export const FAILURE_CREATE_LABEL = `${BASE_PREFIX}FAILURE_CREATE_LABEL`;

export const REQUEST_LABELS_LIST = `${BASE_PREFIX}REQUEST_LABELS_LIST`;
export const SUCCESS_LABELS_LIST = `${BASE_PREFIX}SUCCESS_LABELS_LIST`;
export const FAILURE_LABELS_LIST = `${BASE_PREFIX}FAILURE_LABELS_LIST`;

export const REQUEST_LABEL_BY_ID = `${BASE_PREFIX}REQUEST_LABEL_BY_ID`;
export const SUCCESS_LABEL_BY_ID = `${BASE_PREFIX}SUCCESS_LABEL_BY_ID`;
export const FAILURE_LABEL_BY_ID = `${BASE_PREFIX}FAILURE_LABEL_BY_ID`;

export const REQUEST_UPDATE_LABEL = `${BASE_PREFIX}REQUEST_UPDATE_LABEL`;
export const SUCCESS_UPDATE_LABEL = `${BASE_PREFIX}SUCCESS_UPDATE_LABEL`;
export const FAILURE_UPDATE_LABEL = `${BASE_PREFIX}FAILURE_UPDATE_LABEL`;

export const REQUEST_DELETE_LABEL = `${BASE_PREFIX}REQUEST_LABEL_DELETE`;
export const SUCCESS_DELETE_LABEL = `${BASE_PREFIX}SUCCESS_DELETE_LABEL`;
export const FAILURE_DELETE_LABEL = `${BASE_PREFIX}FAILURE_DELETE_LABEL`;

export const REQUEST_ADD_MEMO = `${BASE_PREFIX}REQUEST_ADD_MEMO`;
export const SUCCESS_ADD_MEMO = `${BASE_PREFIX}SUCCESS_ADD_MEMO`;
export const FAILURE_ADD_MEMO = `${BASE_PREFIX}FAILURE_ADD_MEMO`;

export const REQUEST_REMOVE_MEMO = `${BASE_PREFIX}REQUEST_REMOVE_MEMO`;
export const SUCCESS_REMOVE_MEMO = `${BASE_PREFIX}SUCCESS_REMOVE_MEMO`;
export const FAILURE_REMOVE_MEMO = `${BASE_PREFIX}FAILURE_REMOVE_MEMO`;

export const SET_SELECTED_LABEL_ID = `${BASE_PREFIX}SET_SELECTED_LABEL_ID`;

// Action Creators
export const requestCreateLabel = (title, content) => ({ type: REQUEST_CREATE_LABEL, payload: { title, content } });
export const successCreateLabel = (payload) => ({ type: SUCCESS_CREATE_LABEL, payload });
export const failureCreateLabel = (payload) => ({ type: FAILURE_CREATE_LABEL, payload });

export const requestLabelsList = () => ({ type: REQUEST_LABELS_LIST });
export const successLabelsList = (payload) => ({ type: SUCCESS_LABELS_LIST, payload });
export const failureLabelsList = (payload) => ({ type: FAILURE_LABELS_LIST, payload });

export const requestLabelById = (id) => ({ type: REQUEST_LABEL_BY_ID, payload: id });
export const successLabelById = (payload) => ({ type: SUCCESS_LABEL_BY_ID, payload });
export const failureLabelById = (payload) => ({ type: FAILURE_LABEL_BY_ID, payload });

export const requestUpdateLabel = (id, title) => ({ type: REQUEST_UPDATE_LABEL, payload: { id, title } });
export const successUpdateLabel = (payload) => ({ type: SUCCESS_UPDATE_LABEL, payload });
export const failureUpdateLabel = (payload) => ({ type: FAILURE_UPDATE_LABEL, payload });

export const requestDeleteLabel = (id) => ({ type: REQUEST_DELETE_LABEL, payload: id });
export const successDeleteLabel = (payload) => ({ type: SUCCESS_DELETE_LABEL, payload });
export const failureDeleteLabel = (payload) => ({ type: FAILURE_DELETE_LABEL, payload });

export const requestAddMemo = (labelId, memoIds) => ({ type: REQUEST_ADD_MEMO, payload: { labelId, memoIds } });
export const successAddMemo = (payload) => ({ type: SUCCESS_ADD_MEMO, payload });
export const failureAddMemo = (payload) => ({ type: FAILURE_ADD_MEMO, payload });

export const requestRemoveMemo = (labelId, memoIds) => ({ type: REQUEST_REMOVE_MEMO, payload: { labelId, memoIds } });
export const successRemoveMemo = (payload) => ({ type: SUCCESS_REMOVE_MEMO, payload });
export const failureRemoveMemo = (payload) => ({ type: FAILURE_REMOVE_MEMO, payload });

export const setSelectedLabelId = (labelId) => ({ type: SET_SELECTED_LABEL_ID, payload: labelId });

// helper function
const _successLabelsList = (_action, _draft) => {
  _draft.labelsList = _action.payload;
  _draft.labelsListById = _keyBy(_action.payload, '_id');
};
const _successCreateLabel = (_action, _draft) => {
  _draft.labelsList.push(_action.payload);
  _draft.labelsListById._action.payload._id = _action.payload;
};
const _setSelectedLabelId = (_action, _draft) => {
  _draft.selectedLabelId = _action.payload;
};

// reducer
const initialState = {
  labelsList: [],
  labelsListById: {},
  selectedLabelId: '',
};
const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SUCCESS_LABELS_LIST:
        return _successLabelsList(action, draft);
      case SUCCESS_CREATE_LABEL:
        return _successCreateLabel(action, draft);
      case SET_SELECTED_LABEL_ID:
        return _setSelectedLabelId(action, draft);
      default:
        return state;
    }
  });
};

// selector


export default reducer;