import axios from 'axios';
import { STUDENT_URL } from '../../interfaces/url';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  fetchStudentFailure,
  fetchStudentSuccess,
  registerFailure,
  registerStudentStart,
  registerSuccess,
} from './student.actions';

import StudentActionTypes from './student.types';

export function* fetchStudentsAsync() {
  try {
    const { data } = yield axios.get(`${STUDENT_URL}/student`);
    yield put(fetchStudentSuccess(data));
  } catch (error: any) {
    console.log(error);
    yield put(fetchStudentFailure(error.message));
  }
}

export function* fetchStudentStart() {
  yield takeLatest(StudentActionTypes.FETCH_START, fetchStudentsAsync);
}

export function* register({
  payload: { firstName, lastName, birthDate, email, address, gender },
}) {
  try {
    const { data } = yield axios.post(`${STUDENT_URL}/student`, {
      firstName,
      lastName,
      birthDate,
      email,
      address,
      gender,
    });

    yield put(registerSuccess(data));
  } catch (error) {
    yield put(registerFailure(error));
  }
}

// export function* onRegisterSuccess() {
//   yield takeLatest(StudentActionTypes.REGISTER_SUCCESS, );
// }

export function* onRegisterStudent() {
  yield takeLatest(StudentActionTypes.REGISTER_START, register);
}

export function* studentSaga() {
  yield all([call(fetchStudentStart)]);
}
