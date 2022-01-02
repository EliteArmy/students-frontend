import StudentActionTypes from './student.types';
import axios from 'axios';
import { Student } from '../../interfaces/student';

// Fetch all students
export const fetchStudentStart = () => ({
  type: StudentActionTypes.FETCH_START,
});

export const fetchStudentSuccess = (student: Student) => ({
  type: StudentActionTypes.FETCH_SUCCESS,
  payload: student,
});

export const fetchStudentFailure = (errorMessage: string) => ({
  type: StudentActionTypes.FETCH_FAILURE,
  payload: errorMessage,
});

// For student registration
export const registerStudentStart = (student: Student) => ({
  type: StudentActionTypes.FETCH_START,
  payload: student,
});

export const registerSuccess = (student: Student) => ({
  type: StudentActionTypes.REGISTER_SUCCESS,
  payload: { student },
});

export const registerFailure = (error: any) => ({
  type: StudentActionTypes.REGISTER_SUCCESS,
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
