import { combineReducers } from 'redux';

import studentReducer from './students/student.reducer';

const rootReducer = combineReducers({
  students: studentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
