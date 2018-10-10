import {
  call,
  put,
  take,
  fork,
  select
} from 'redux-saga/effects';
import * as fromMemo from '../reducers/memo';
import { getMemos } from '../apis/memos';

function* workMemo(action) {
  try {
    const { data } = yield call(getMemos);
    console.log('res', data);
    yield put(fromMemo.successMemos(data))
  } catch (e) {
    console.log('errored at workTest -', e);
    yield put(fromMemo.failureMemos(e))
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////          watch sagas           ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function* watchMemos() {
  while (true) {
    try {
      const action = yield take(fromMemo.REQUEST_MEMOS);
      yield fork(workMemo, action);
    } catch (e) {
      console.log('errored in watchMemos -', e.message);
    }
  }
}

export default [
  watchMemos,
];
