import axios from 'axios';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Student } from '../../interfaces/student';

import { STUDENT_URL } from '../../interfaces/url';

import {
  fetchStudentFailure,
  fetchStudentSuccess,
  registerFailure,
  registerStudentStart,
  registerSuccess,
} from './student.actions';

import { studentActionTypes } from './student.types';

const getStudents = () => axios.get<Student[]>(`${STUDENT_URL}/student`);

function* fetchStudentsAsync() {
  try {
    const { data } = yield call(getStudents);

    yield put(fetchStudentSuccess({ students: data }));
  } catch (error: any) {
    console.log(error);
    yield put(fetchStudentFailure({ error: error.message }));
  }
}

// export function* register({
//   payload: { firstName, lastName, birthDate, email, address, gender },
// }) {
//   try {
//     const { data } = yield axios.post(`${STUDENT_URL}/student`, {
//       firstName,
//       lastName,
//       birthDate,
//       email,
//       address,
//       gender,
//     });

//     yield put(registerSuccess(data));
//   } catch (error) {
//     yield put(registerFailure(error));
//   }
// }

// export function* onRegisterSuccess() {
//   yield takeLatest(studentActionTypes.REGISTER_SUCCESS, );
// }

export function* fetchStudentStart() {
  yield takeLatest(studentActionTypes.FETCH_START, fetchStudentsAsync);
}

// export function* onRegisterStudent() {
//   yield takeLatest(studentActionTypes.REGISTER_START, register);
// }

export function* studentSaga() {
  yield all([call(fetchStudentStart)]);
}
