import axios from 'axios';
import { all, takeLatest, select, put } from 'redux-saga/effects';
import { setSession } from '../../helpers/api';
import { getAuth, getExample } from '../selectors';
import {
  login,
  loginError,
  loginSuccess,
  signup,
  signupError,
  signupSuccess,
} from '../slices/auth';

import { exampleAction } from '../slices/example';

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

    if (data) {
      console.log(data);
      setSession(data);
      yield put(loginSuccess(data));
    } else {
      yield put(loginError('Something went wrong !'));
    }
  } catch (error) {
    yield put(loginError('Something went wrong !'));
  }
}

function* registerSeeker() {
  try {
    const { currentUser } = yield select(getAuth);
    const { data } = yield axios.post(
      'http://localhost:5000/api/auth/register-job-seeker',
      {
        email: currentUser.email,
        password: currentUser.password,
        firstname: currentUser.firstname,
        lastname: currentUser.lastname,
        agencyId: 5,
        phoneNumber: '558956964',
      }
    );

    if (data.message === 'job-seeker created successfuly;') {
      yield put(signupSuccess(data.message));
    } else {
      yield put(signupError('Something went wrong !'));
    }
  } catch (error) {
    yield put(signupError('Something went wrong !'));
  }
}

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  yield all([
    takeLatest(exampleAction.type, runExample),
    takeLatest(login.type, authenticate),
    takeLatest(signup.type, registerSeeker),
  ]);
}

export default rootSaga;
