import { createSelector } from 'reselect';
import { Student } from '../../interfaces/student';

const selectStudents = (state: { students: Student[] }) => state.students;

export const selectAllStudents = createSelector(
  [selectStudents],
  student => student
);

export const selectOneStudent = (_id: string) =>
  createSelector([selectStudents], students =>
    students.find(student => _id === student._id)
  );
