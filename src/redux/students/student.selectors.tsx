import { createSelector } from 'reselect';

const selectStudent = (state: { student: any }) => state.student;

export const selectStudents = createSelector(
  [selectStudent],
  student => student
);
