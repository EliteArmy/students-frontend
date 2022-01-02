import axios from 'axios';
import { STUDENT_URL } from '../../interfaces/url';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import { fetchStudentFailure, fetchStudentSuccess } from './student.actions';

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

export function* studentSaga() {
  yield all([call(fetchStudentStart)]);
}
