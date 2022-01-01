import { takeLatest, call, put, all } from 'redux-saga/effects';
import StudentActionTypes from './student.types';
import { fetchStudentFailure, fetchStudentSuccess } from './student.actions';

export function* fetchStudents() {
  try {
  } catch (error) {
    console.log(error);
  }
}
