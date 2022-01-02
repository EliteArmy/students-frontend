import { all, call } from 'redux-saga/effects';

import { studentSaga } from './students/student.sagas';

export default function* rootSaga() {
  yield all([call(studentSaga)]);
}
