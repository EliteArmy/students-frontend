import StudentActionTypes from './student.types';

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
    // TODO
  };
};
