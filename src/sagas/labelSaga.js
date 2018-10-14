import {
  call,
  put,
  take,
  fork,
} from 'redux-saga/effects';
import * as fromLabel from '../reducers/label';
import {
  createLabel,
  getLabels,
  getLabelById,
  updateLabel,
  deleteLabel,
  addMemo,
  removeMemo,
} from '../apis/labels';
import * as fromMemo from '../reducers/memo';

function* workCreateLabel(action) {
  try {
    const { data } = yield call(createLabel, action.payload);
    console.log('successCreateLabel', data);
    yield put(fromLabel.successCreateLabel(data));
  } catch (e) {
    console.log('errored at workCreateLabel -', e);
    yield put(fromLabel.failureCreateLabel(e));
  }
}

function* workLabelsList(action) {
  try {
    const { data } = yield call(getLabels);
    console.log('success workLabelsList:', data);
    yield put(fromLabel.successLabelsList(data));
  } catch (e) {
    console.log('errored at workLabelsList -', e);
    yield put(fromLabel.failureLabelsList(e));
  }
}

function* workLabelById(action) {
  try {
    const { data } = yield call(getLabelById, action.payload);
    console.log('res', data);
    yield put(fromLabel.successLabelById(data));
  } catch (e) {
    console.log('errored at workLabelById -', e);
    yield put(fromLabel.failureLabelById(e));
  }
}

function* workUpdateLabel(action) {
  try {
    const { data } = yield call(updateLabel, action.payload);
    console.log('res', data);
    yield put(fromLabel.successUpdateLabel(data));
  } catch (e) {
    console.log('errored at workUpdateLabel -', e);
    yield put(fromLabel.failureUpdateLabel(e));
  }
}

function* workDeleteLabel(action) {
  try {
    const res = yield call(deleteLabel, action.payload);
    yield put(fromLabel.successDeleteLabel());
  } catch (e) {
    console.log('errored at workDeleteLabel -', e);
    yield put(fromLabel.failureDeleteLabel(e));
  }
}

export function* workAddMemo(action) {
  try {
    const { data } = yield call(addMemo, action.payload);
    console.log('res', data);
    yield put(fromLabel.successAddMemo(data));
  } catch (e) {
    console.log('errored at workAddMemo -', e);
    yield put(fromLabel.failureAddMemo(e));
  }
}

function* workRemoveMemo(action) {
  try {
    const res = yield call(removeMemo, action.payload);
    yield put(fromLabel.successRemoveMemo());

    yield put(fromMemo.requestMemosList());
    yield put(fromLabel.requestLabelsList());
  } catch (e) {
    console.log('errored at workRemoveMemo -', e);
    yield put(fromLabel.failureRemoveMemo(e))
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////          watch sagas           ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function* watchCreateLabel() {
  while (true) {
    try {
      const action = yield take(fromLabel.REQUEST_CREATE_LABEL);
      yield fork(workCreateLabel, action);
    } catch (e) {
      console.log('errored in watchCreateLabel -', e.message);
    }
  }
}

function* watchLabelsList() {
  while (true) {
    try {
      const action = yield take(fromLabel.REQUEST_LABELS_LIST);
      yield fork(workLabelsList, action);
    } catch (e) {
      console.log('errored in watchLabels -', e.message);
    }
  }
}

function* watchLabelById() {
  while (true) {
    try {
      const action = yield take(fromLabel.REQUEST_LABEL_BY_ID);
      yield fork(workLabelById, action);
    } catch (e) {
      console.log('errored in watchLabelById -', e.message);
    }
  }
}

function* watchUpdateLabel() {
  while (true) {
    try {
      const action = yield take(fromLabel.REQUEST_UPDATE_LABEL);
      yield fork(workUpdateLabel, action);
    } catch (e) {
      console.log('errored in watchUpdateLabel -', e.message);
    }
  }
}

function* watchDeleteLabel() {
  while (true) {
    try {
      const action = yield take(fromLabel.REQUEST_DELETE_LABEL);
      yield fork(workDeleteLabel, action);
    } catch (e) {
      console.log('errored in watchDeleteLabel -', e.message);
    }
  }
}

function* watchAddMemo() {
  while (true) {
    try {
      const action = yield take(fromLabel.REQUEST_ADD_MEMO);
      yield fork(workAddMemo, action);
    } catch (e) {
      console.log('errored in watchAddMemo -', e.message);
    }
  }
}

function* watchRemoveMemo() {
  while (true) {
    try {
      const action = yield take(fromLabel.REQUEST_REMOVE_MEMO);
      yield fork(workRemoveMemo, action);
    } catch (e) {
      console.log('errored in watchRemoveMemo -', e.message);
    }
  }
}


export default [
  watchCreateLabel,
  watchLabelsList,
  watchLabelById,
  watchUpdateLabel,
  watchDeleteLabel,
  watchAddMemo,
  watchRemoveMemo,
];
