import axios from 'axios';
import { all, takeLatest, select, put } from 'redux-saga/effects';
import { setSession } from '../../helpers/api';
import {
  getAgence,
  getAuth,
  getManageAccounts,
  getManageSeeker,
} from '../selectors';
import {
  login,
  loginError,
  loginSuccess,
  signup,
  signupError,
  signupSuccess,
} from '../slices/auth';
import {
  createAgence,
  createAgenceError,
  createAgenceSuccess,
  deleteAgence,
  deleteAgenceError,
  deleteAgenceSuccess,
  fetchAgences,
  fetchAgencesError,
  fetchAgencesSuccess,
} from '../slices/agence';
import {
    createAdmin,
    createAdminError,
    createAdminSuccess,
  deleteAdmin,
  deleteAdminError,
  deleteAdminSuccess,
  fetchAdmins,
  fetchAdminsError,
  fetchAdminsSuccess,
} from '../slices/manageAccounts';
import {
  deleteSeeker,
  fetchSeeker,
  fetchSeekerError,
  fetchSeekers,
  fetchSeekersError,
  fetchSeekersSuccess,
  fetchSeekerSuccess,
  updateSeeker,
  updateSeekerError,
  updateSeekerSuccess,
} from '../slices/seeker';

function* authenticate() {
  try {
    const { currentUser } = yield select(getAuth);
    const { data } = yield axios.post('http://localhost:5000/api/auth/login', {
      email: currentUser.email,
      password: currentUser.password,
    });

    if (data) {
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

function* loadAgences() {
  try {
    const { data } = yield axios.get(
      'http://localhost:5000/api/agencies?page=1&itemsPerPage=10'
    );

    if (data.message === 'agencies list') {
      console.log(data);
      yield put(fetchAgencesSuccess(data.body));
    } else {
      yield put(fetchAgencesError('Something went wrong !'));
    }
  } catch (error) {
    yield put(fetchAgencesError('Something went wrong !'));
  }
}

function* addAgence() {
  try {
    const { agence } = yield select(getAgence);
    const { data } = yield axios.post('http://localhost:5000/api/agencies', {
      name: agence.name,
      email: agence.email,
      phoneNumber: agence.phoneNumber,
    });

    if (data.message === 'agency created successfully.') {
      yield put(createAgenceSuccess(data.message));
    } else {
      yield put(createAgenceError('Something went wrong !'));
    }
  } catch (error) {
    yield put(createAgenceError('Something went wrong !'));
  }
}

function* removeAgence() {
  try {
    const { agence } = yield select(getAgence);
    const { data } = yield axios.delete(
      `http://localhost:5000/api/agencies/${agence.id}`
    );

    if (data.message === 'agency deleted successfully.') {
      yield put(deleteAgenceSuccess(data.message));
    } else {
      yield put(deleteAgenceError('Something went wrong !'));
    }
  } catch (error) {
    yield put(deleteAgenceError('Something went wrong !'));
  }
}

function* loadAdmins() {
  try {
    const { data } = yield axios.get(`localhost:5000/api/users/admins`);

    if (data.message === 'admins list') {
      yield put(fetchAdminsSuccess(data.body));
    } else {
      yield put(fetchAdminsError('Something went wrong !'));
    }
  } catch (error) {
    yield put(fetchAdminsError('Something went wrong !'));
  }
}

function* removeAdmin() {
  try {
    const { admin } = yield select(getManageAccounts);
    const { data } = yield axios.delete(
      `http://localhost:5000/api/users/${admin.id}`
    );

    if (data.message === 'agency deleted successfully.') {
      yield put(deleteAdminSuccess(data.message));
    } else {
      yield put(deleteAdminError('Something went wrong !'));
    }
  } catch (error) {
    yield put(deleteAdminError('Something went wrong !'));
  }
}

function* addAdmin() {
    try {
      const { admin } = yield select(getManageAccounts);
      const { data } = yield axios.post('http://localhost:5000/api/auth/register-admin', {
        name: admin.name,
        email: admin.email,
        phoneNumber: admin.phoneNumber,
        type: "SUPER_ADMIN",
        agencyId: admin.agency,
        birthDate: admin.birthDate,
      });
  
      if (data.message === 'admin created successfuly;') {
        yield put(createAdminSuccess(data.message));
      } else {
        yield put(createAdminError('Something went wrong !'));
      }
    } catch (error) {
      yield put(createAdminError('Something went wrong !'));
    }
  }

function* loadSeekers() {
  try {
    const { data } = yield axios.get(
      `localhost:8090/api/job-seekers/search?page=0&size=10`,
      {}
    );

    if (data.message === 'Get JobSeekers List.') {
      yield put(fetchSeekersSuccess(data.body));
    } else {
      yield put(fetchSeekersError('Something went wrong !'));
    }
  } catch (error) {
    yield put(fetchSeekersError('Something went wrong !'));
  }
}

function* removeSeeker() {
  try {
    const { tempSeeker } = yield select(getManageSeeker);
    const { data } = yield axios.delete(
      `http://localhost:5000/api/job-seekers/${tempSeeker.id}`
    );

    if (data.message === 'agency deleted successfully.') {
      yield put(deleteAgenceSuccess(data.message));
    } else {
      yield put(deleteAgenceError('Something went wrong !'));
    }
  } catch (error) {
    yield put(deleteAgenceError('Something went wrong !'));
  }
}

function* loadSeeker() {
  try {
    const { user } = yield select(getAuth);
    const { data } = yield axios.get(
      `http://localhost:8090/api/job-seekers/1`
    );

    console.log(data)

    if (data.message === 'job seeker found.') {
      yield put(fetchSeekerSuccess(data.body));
    } else {
      yield put(fetchSeekerError('Job seeker not found !'));
    }
  } catch (error) {
    yield put(fetchSeekerError('Job seeker not found !'));
  }
}

function* putSeeker() {
  try {
    const { tempSeeker, seeker } = yield select(getManageSeeker);
    const { data } = yield axios.put(
      `http://localhost:5000/api/job-seekers/${tempSeeker.idJobSeeker}`,
      {
        ...seeker,
        ...tempSeeker,
      }
    );

    if (data.message === 'item updated successfully.') {
      yield put(updateSeekerSuccess(data.body));
    } else {
      yield put(updateSeekerError('Something went wrong !'));
    }
  } catch (error) {
    yield put(updateSeekerError('Something went wrong !'));
  }
}

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  yield all([
    takeLatest(fetchAgences.type, loadAgences),
    takeLatest(createAgence.type, addAgence),
    takeLatest(deleteAgence.type, removeAgence),
    takeLatest(fetchAdmins.type, loadAdmins),
    takeLatest(deleteAdmin.type, removeAdmin),
    takeLatest(createAdmin.type, addAdmin),
    takeLatest(fetchSeekers.type, loadSeekers),
    takeLatest(fetchSeeker.type, loadSeeker),
    takeLatest(deleteSeeker.type, removeSeeker),
    takeLatest(updateSeeker.type, putSeeker),
    takeLatest(login.type, authenticate),
    takeLatest(signup.type, registerSeeker),
  ]);
}

export default rootSaga;
