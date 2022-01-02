import axios from 'axios';
import { studentActionTypes } from './student.types';
import { Student } from '../../interfaces/student';
import {
  FetchStudentsStart,
  FetchStudentsSuccess,
  FetchStudentsSuccessPayload,
  FetchStudentsFailure,
  FetchStudentsFailurePayload,
} from './types/types';

// --- Fetch all students
export const fetchStudentStart = (): FetchStudentsStart => ({
  type: studentActionTypes.FETCH_START,
});

export const fetchStudentSuccess = (
  payload: FetchStudentsSuccessPayload
): FetchStudentsSuccess => ({
  type: studentActionTypes.FETCH_SUCCESS,
  payload,
});

export const fetchStudentFailure = (
  payload: FetchStudentsFailurePayload
): FetchStudentsFailure => ({
  type: studentActionTypes.FETCH_FAILURE,
  payload,
});

// --- For student registration
export const registerStudentStart = (student: Student) => ({
  type: studentActionTypes.FETCH_START,
  payload: student,
});

export const registerSuccess = (student: Student) => ({
  type: studentActionTypes.REGISTER_SUCCESS,
  payload: { student },
});

export const registerFailure = (error: any) => ({
  type: studentActionTypes.REGISTER_SUCCESS,
  payload: error,
});

export const fetchStudentStartAsync = () => {
  return (dispatch: any) => {
    // dispatch(fetchCollectionsStart());

    axios({ url: '', method: 'get' })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
};
