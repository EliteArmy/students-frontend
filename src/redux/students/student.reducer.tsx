import { studentActionTypes } from './student.types';
import { StudentsActions, StudentsState } from './types/types';

const INITIAL_STATE: StudentsState = {
  students: [],
  isFetching: false,
  errorMessage: null,
};

const studentReducer = (state = INITIAL_STATE, action: StudentsActions) => {
  switch (action.type) {
    case studentActionTypes.FETCH_START:
      return { ...state, isFetching: true };

    case studentActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        students: action.payload.students,
        error: null,
      };

    case studentActionTypes.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        students: [],
        errorMessage: action.payload.error,
      };

    default:
      return state;
  }
};

export default studentReducer;
