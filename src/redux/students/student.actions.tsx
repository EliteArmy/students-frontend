import StudentActionTypes from './student.types';
import axios from 'axios';

export const fetchStudentStart = () => ({
  type: StudentActionTypes.FETCH_START,
});

export const fetchStudentSuccess = (collectionsMap: any) => ({
  type: StudentActionTypes.FETCH_SUCCESS,
  payload: collectionsMap,
});

export const fetchStudentFailure = (errorMessage: string) => ({
  type: StudentActionTypes.FETCH_FAILURE,
  payload: errorMessage,
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
