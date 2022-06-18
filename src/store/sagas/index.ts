import { all, takeLatest, select, put } from 'redux-saga/effects';

import axios from 'axios';
import {
  getAgence,
  getAuth,
  getManageAccounts,
  getManageJobRequest,
  getManageSeeker,
} from '../selectors';
import {
  verify,
  login,
  loginError,
  loginSuccess,
  signup,
  signupError,
  signupSuccess,
  verifySuccess,
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
  attachEducation,
  attachEducationError,
  attachEducationSuccess,
  createDiplome,
  createDiplomeError,
  createDiplomeSuccess,
  deleteDiplome,
  deleteEducation,
  deleteEducationError,
  deleteEducationSuccess,
  deleteSeeker,
  fetchDiplomesError,
  fetchDiplomesSuccess,
  fetchEducationError,
  fetchEducationSuccess,
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
import {
  createJobRequest,
  fetchJobRequest,
  fetchJobRequests,
  fetchJobRequestsError,
  fetchJobRequestsSuccess,
} from '../slices/manageJobRequests';

function* reloadAuth() {
  try {
    const { data } = yield axios.get('http://localhost:5000/api/auth/get-auth');
    if (data.message === 'account found.') {
      yield put(verifySuccess({ user: data.body, isAuthenticated: true }));
    } else {
      yield put(verifySuccess({ user: {}, isAuthenticated: false }));
    }
  } catch (Err) {
    yield put(verifySuccess({ user: {}, isAuthenticated: false }));
  }
}

function* authenticate() {
  try {
    const { currentUser } = yield select(getAuth);
    const { data } = yield axios.post('http://localhost:5000/api/auth/login', {
      email: currentUser.email,
      password: currentUser.password,
    });

    if (data.message === 'logged in successfully') {
      yield put(loginSuccess(data.body));
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
    const { data } = yield axios.get(`http://localhost:5000/api/users/admins`);

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

    const { data } = yield axios.post(
      'http://localhost:5000/api/auth/register-admin',
      {
        firstname: admin.firstname,
        lastname: admin.lastname,
        email: admin.email,
        phoneNumber: admin.phoneNumber,
        type: 'SUPER_ADMIN',
        agencyId: parseInt(admin.agency),
        birthDate: admin.birthday,
      }
    );

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
      `http://localhost:8090/api/job-seekers/search?page=0&size=10`,
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
    // const { user } = yield select(getAuth);
    const { data } = yield axios.get(`http://localhost:8090/api/job-seekers/1`);

    if (data.message === 'job seeker found.') {
      yield put(
        fetchSeekerSuccess({
          seeker: data.body,
        })
      );
    } else {
      yield put(fetchSeekerError('Job seeker not found !'));
    }
  } catch (error) {
    yield put(fetchSeekerError('Job seeker not found !'));
  }
}

function* addDiplome() {
  try {
    const { tempSeeker, seeker } = yield select(getManageSeeker);
    const { data } = yield axios.post(
      `http://localhost:8090/api/job-seekers/diplome/${seeker.idJobSeeker}`,
      {
        title: tempSeeker.title,
        storagePath: tempSeeker.storagePath,
      }
    );

    if (data.message === 'Diplome attached.') {
      yield put(createDiplomeSuccess(data.message));
    } else {
      yield put(createDiplomeError('Something went wrong !'));
    }
  } catch (error) {
    yield put(createDiplomeError('Something went wrong !'));
  }
}

function* loadDiplomes() {
  try {
    // const { user } = yield select(getAuth);
    const { data } = yield axios.get(
      `http://localhost:8090/api/job-seekers/diplome/b/1`
    );

    if (data.message === 'Diplomes List found.') {
      yield put(
        fetchDiplomesSuccess({
          diplomes: data.body,
        })
      );
    } else {
      yield put(fetchDiplomesError('Something went wrong!'));
    }
  } catch (error) {
    yield put(fetchDiplomesError('Something went wrong!'));
  }
}

function* removeDiplome() {
  try {
    const { tempSeeker } = yield select(getManageSeeker);
    const { data } = yield axios.delete(
      `http://localhost:8090/api/job-seekers/diplome/${tempSeeker.id}`
    );

    if (data.message === 'diplome deleted.') {
      yield put(deleteEducationSuccess(data.message));
    } else {
      yield put(deleteEducationError('Something went wrong !'));
    }
  } catch (error) {
    yield put(deleteEducationError('Something went wrong !'));
  }
}

function* loadEducation() {
  try {
    // const { user } = yield select(getAuth);
    const { data } = yield axios.get(
      `http://localhost:8090/api/job-seekers/educations/1`
    );

    if (data.message === 'Education List found.') {
      yield put(
        fetchEducationSuccess({
          educations: data.body,
        })
      );
    } else {
      yield put(fetchEducationError('Something went wrong!'));
    }
  } catch (error) {
    yield put(fetchEducationError('Something went wrong!'));
  }
}

function* addEducation() {
  try {
    const { tempSeeker, seeker } = yield select(getManageSeeker);
    const { data } = yield axios.post(
      `http://localhost:8090/api/job-seekers/educations/${seeker.idJobSeeker}`,
      {
        school: tempSeeker.school,
        title: tempSeeker.title,
        startDate: tempSeeker.startDate,
        endDate: tempSeeker.endDate,
      }
    );

    if (data.message === 'Education attached.') {
      yield put(attachEducationSuccess(data.message));
    } else {
      yield put(attachEducationError('Something went wrong !'));
    }
  } catch (error) {
    yield put(attachEducationError('Something went wrong !'));
  }
}

function* removeEducation() {
  try {
    const { tempSeeker } = yield select(getManageSeeker);
    const { data } = yield axios.delete(
      `http://localhost:8090/api/job-seekers/educations/${tempSeeker.id}`
    );

    if (data.message === 'Education deleted.') {
      yield put(deleteEducationSuccess(data.message));
    } else {
      yield put(deleteEducationError('Something went wrong !'));
    }
  } catch (error) {
    yield put(deleteEducationError('Something went wrong !'));
  }
}

function* putSeeker() {
  try {
    const { tempSeeker, seeker } = yield select(getManageSeeker);

    const { data } = yield axios.put(
      `http://localhost:8090/api/job-seekers/${seeker.idJobSeeker}`,
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

function* loadRequests() {
  try {
    const { data } = yield axios.get(
      `http://localhost:8090/api/job-seekers/jobRequests/search?page=0&size=10`,
      {}
    );

    if (data.message === 'Get JobSeekers List.') {
      yield put(fetchJobRequestsSuccess(data.body));
    } else {
      yield put(fetchJobRequestsError('Something went wrong !'));
    }
  } catch (error) {
    yield put(fetchJobRequestsError('Something went wrong !'));
  }
}

function* loadRequestById() {
  try {
    // const { tempRequest } = yield select(getManageJobRequest);
    const { data } = yield axios.get(
      `http://localhost:8090/api/job-seekers/job-request/b/1`
    );

    if (data.message === 'job request List found.') {
      yield put(fetchJobRequestsSuccess(data.body));
    } else {
      yield put(fetchJobRequestsError('Something went wrong !'));
    }
  } catch (error) {
    yield put(fetchJobRequestsError('Something went wrong !'));
  }
}

function* addJobRequest() {
  try {
    const { seeker } = yield select(getManageSeeker);
    const { tempRequest } = yield select(getManageJobRequest);
    const { data } = yield axios.post(
      `http://localhost:8090/api/job-seekers/job-request/1`,
      {
        agency: 5,
        jobSeeker: seeker.idJobSeeker,
        reason: tempRequest.reason,
        training: false,
        learning: true,
        nightWork: true,
        teamWork: true,
      }
    );

    if (data.message === 'job request List found.') {
      yield put(fetchJobRequestsSuccess(data.body));
    } else {
      yield put(fetchJobRequestsError('Something went wrong !'));
    }
  } catch (error) {
    yield put(fetchJobRequestsError('Something went wrong !'));
  }
}

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  yield all([
    takeLatest(verify.type, reloadAuth),
    takeLatest(fetchAgences.type, loadAgences),
    takeLatest(createAgence.type, addAgence),
    takeLatest(deleteAgence.type, removeAgence),
    takeLatest(fetchAdmins.type, loadAdmins),
    takeLatest(deleteAdmin.type, removeAdmin),
    takeLatest(createAdmin.type, addAdmin),
    takeLatest(fetchSeekers.type, loadSeekers),
    takeLatest(fetchSeeker.type, loadSeeker),
    takeLatest(fetchSeeker.type, loadDiplomes),
    takeLatest(fetchSeeker.type, loadEducation),
    takeLatest(deleteSeeker.type, removeSeeker),
    takeLatest(updateSeeker.type, putSeeker),
    takeLatest(createDiplome.type, addDiplome),
    takeLatest(deleteDiplome.type, removeDiplome),
    takeLatest(attachEducation.type, addEducation),
    takeLatest(deleteEducation.type, removeEducation),
    takeLatest(fetchJobRequests.type, loadRequests),
    takeLatest(fetchJobRequest.type, loadRequestById),
    takeLatest(createJobRequest.type, addJobRequest),
    takeLatest(login.type, authenticate),
    takeLatest(signup.type, registerSeeker),
  ]);
}

export default rootSaga;
