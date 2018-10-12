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
} from '../apis/labels';

function* workCreateLabel(action) {
  try {
    const { data } = yield call(createLabel, action.payload);
    console.log('res', data);
    yield put(fromLabel.successCreateLabel(data))
  } catch (e) {
    console.log('errored at workCreateLabel -', e);
    yield put(fromLabel.failureCreateLabel(e))
  }
}

function* workLabelsList(action) {
  try {
    const { data } = yield call(getLabels);
    console.log('res', data);
    yield put(fromLabel.successLabelsList(data))
  } catch (e) {
    console.log('errored at workLabelsList -', e);
    yield put(fromLabel.failureLabelsList(e))
  }
}

function* workLabelById(action) {
  try {
    const { data } = yield call(getLabelById, action.payload);
    console.log('res', data);
    yield put(fromLabel.successLabelById(data))
  } catch (e) {
    console.log('errored at workLabelById -', e);
    yield put(fromLabel.failureLabelById(e))
  }
}

function* workUpdateLabel(action) {
  try {
    const { data } = yield call(updateLabel, action.payload);
    console.log('res', data);
    yield put(fromLabel.successUpdateLabel(data))
  } catch (e) {
    console.log('errored at workUpdateLabel -', e);
    yield put(fromLabel.failureUpdateLabel(e))
  }
}

function* workDeleteLabel(action) {
  try {
    const { data } = yield call(deleteLabel, action.payload);
    console.log('res', data);
    yield put(fromLabel.successDeleteLabel(data))
  } catch (e) {
    console.log('errored at workDeleteLabel -', e);
    yield put(fromLabel.failureDeleteLabel(e))
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


export default [
  watchCreateLabel,
  watchLabelsList,
  watchLabelById,
  watchUpdateLabel,
  watchDeleteLabel,
];
