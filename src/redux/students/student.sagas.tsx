import axios from 'axios';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Student } from '../../interfaces/student';

import { STUDENT_URL } from '../../interfaces/url';

import {
  fetchStudentFailure,
  fetchStudentSuccess,
  registerStudentSuccess,
  registerStudentFailure,
} from './student.actions';

import { studentActionTypes } from './student.types';

const getStudents = () => axios.get<Student[]>(`${STUDENT_URL}/student`);

function* fetchStudentsAsync() {
  try {
    const { data } = yield call(getStudents);

    yield put(fetchStudentSuccess({ students: data }));
  } catch (error: any) {
    // console.log(error);
    yield put(fetchStudentFailure({ error: error.message }));
  }
}

function* registerStudentAsync(action: {
  payload: { student: Student };
  type: string;
}) {
  try {
    const { firstName, lastName, birthDate, email, address, gender } =
      action.payload.student;

    const { data } = yield axios.post<Student>(`${STUDENT_URL}/student`, {
      firstName,
      lastName,
      birthDate,
      email,
      address,
      gender,
    });

    yield put(registerStudentSuccess({ student: data }));
  } catch (error: any) {
    // console.log(error);
    yield put(registerStudentFailure({ error: error.message }));
  }
}

export function* fetchStudentStart() {
  yield takeLatest(studentActionTypes.FETCH_START, fetchStudentsAsync);
}

export function* onRegisterStudent() {
  yield takeLatest(studentActionTypes.REGISTER_START, registerStudentAsync);
}

export function* studentSaga() {
  yield all([call(fetchStudentStart), call(onRegisterStudent)]);
}
