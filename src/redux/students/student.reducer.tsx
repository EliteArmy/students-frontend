import { studentActionTypes } from './student.types';
import { StudentsActions, StudentsState } from './types/types';
import { removeStudent } from './students.utils';

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
        errorMessage: null,
      };

    case studentActionTypes.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        students: [],
        errorMessage: action.payload.error,
      };

    case studentActionTypes.DELETE_SUCCESS:
      return {
        ...state,
        students: removeStudent(state.students, action.payload.student),
      };

    default:
      return state;
  }
};

export default studentReducer;
