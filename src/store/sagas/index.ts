import axios from 'axios';
import { all, takeLatest, select, put } from 'redux-saga/effects';
import { setSession } from '../../helpers/api';
import { getAuth, getExample } from '../selectors';
import { login, loginError, loginSuccess } from '../slices/auth';

import { exampleAction } from "../slices/example";

function* runExample() {
  try {
    // DO YOUR HTTP CALL USING REDUX SAGA
    const { example } = yield select(getExample);
    console.log(example);
  } catch (error) {
    console.log(error);
  }
}

function* authenticate() {
  try {
    const { currentUser } = yield select(getAuth);
    const { data } = yield axios.post('http://localhost:5000/api/auth/login', {
      email: currentUser.email,
      password: currentUser.password,
    });

    if (data.status === 'success') {
      console.log(data);
      setSession(data.token);
      yield put(loginSuccess(data.user));
    } else {
      yield put(loginError('Something went wrong !'));
    }
  } catch (error) {
    yield put(loginError('Something went wrong !'));
  }
}

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  yield all([
    takeLatest(exampleAction.type, runExample),
    takeLatest(login.type, authenticate),
  ]);
}

export default rootSaga;
