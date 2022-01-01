import StudentActionTypes from './student.types';

const INITIAL_STATE = {
  students: null,
  isFetching: false,
  errorMessage: undefined,
};

const studentReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case StudentActionTypes.FETCH_START:
      return { ...state, isFetching: true };

    case StudentActionTypes.FETCH_SUCCESS:
      return { ...state, isFetching: false, students: action.payload };

    case StudentActionTypes.FETCH_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };

    default:
      return state;
  }
};

export default studentReducer;
