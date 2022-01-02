import { combineReducers } from 'redux';

import studentReducer from './students/student.reducer';

const rootReducer = combineReducers({
  student: studentReducer,
});

export default rootReducer;
