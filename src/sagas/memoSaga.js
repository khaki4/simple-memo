import {
  call,
  put,
  take,
  fork,
} from 'redux-saga/effects';
import * as fromMemo from '../reducers/memo';
import * as fromLabel from '../reducers/label';
import {
  createMemo,
  getMemos,
  getMemoById,
  updateMemo,
  deleteMemo,
} from '../apis/memos';

function* workCreateMemo(action) {
  try {
    const { data } = yield call(createMemo, action.payload);
    console.log('res', data);
    yield put(fromMemo.successCreateMemo(data))
  } catch (e) {
    console.log('errored at workCreateMemo -', e);
    yield put(fromMemo.failureCreateMemo(e))
  }
}

function* workMemosList(action) {
  try {
    const { data } = yield call(getMemos);
    console.log('res', data);
    yield put(fromMemo.successMemosList(data))
  } catch (e) {
    console.log('errored at workMemosList -', e);
    yield put(fromMemo.failureMemosList(e))
  }
}

function* workMemoById(action) {
  try {
    const { data } = yield call(getMemoById, action.payload);
    console.log('res', data);
    yield put(fromMemo.successMemoById(data))
  } catch (e) {
    console.log('errored at workMemoById -', e);
    yield put(fromMemo.failureMemoById(e))
  }
}

function* workUpdateMemo(action) {
  try {
    const { data } = yield call(updateMemo, action.payload);
    console.log('res', data);
    yield put(fromMemo.successUpdateMemo(data));

    yield put(fromMemo.requestMemosList());
    yield put(fromLabel.requestLabelsList());
  } catch (e) {
    console.log('errored at workUpdateMemo -', e);
    yield put(fromMemo.failureUpdateMemo(e));
  }
}

function* workDeleteMemo(action) {
  try {
    const { data } = yield call(deleteMemo, action.payload);
    console.log('res', data);
    yield put(fromMemo.successDeleteMemo(data))
  } catch (e) {
    console.log('errored at workDeleteMemo -', e);
    yield put(fromMemo.failureDeleteMemo(e))
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////          watch sagas           ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function* watchCreateMemo() {
  while (true) {
    try {
      const action = yield take(fromMemo.REQUEST_CREATE_MEMO);
      yield fork(workCreateMemo, action);
    } catch (e) {
      console.log('errored in watchCreateMemo -', e.message);
    }
  }
}

function* watchMemosList() {
  while (true) {
    try {
      const action = yield take(fromMemo.REQUEST_MEMOS_LIST);
      yield fork(workMemosList, action);
    } catch (e) {
      console.log('errored in watchMemos -', e.message);
    }
  }
}

function* watchMemoById() {
  while (true) {
    try {
      const action = yield take(fromMemo.REQUEST_MEMO_BY_ID);
      yield fork(workMemoById, action);
    } catch (e) {
      console.log('errored in watchMemoById -', e.message);
    }
  }
}

function* watchUpdateMemo() {
  while (true) {
    try {
      const action = yield take(fromMemo.REQUEST_UPDATE_MEMO);
      yield fork(workUpdateMemo, action);
    } catch (e) {
      console.log('errored in watchUpdateMemo -', e.message);
    }
  }
}

function* watchDeleteMemo() {
  while (true) {
    try {
      const action = yield take(fromMemo.REQUEST_DELETE_MEMO);
      yield fork(workDeleteMemo, action);
    } catch (e) {
      console.log('errored in watchDeleteMemo -', e.message);
    }
  }
}


export default [
  watchCreateMemo,
  watchMemosList,
  watchMemoById,
  watchUpdateMemo,
  watchDeleteMemo,
];
