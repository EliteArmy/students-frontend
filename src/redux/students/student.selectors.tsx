import { createSelector } from 'reselect';
import { Student } from '../../interfaces/student';
import { StudentsState } from './types/types';

const selectStudents = (state: any) => state.students;

export const selectStudent = createSelector(
  [selectStudents],
  (student: StudentsState) => {
    return student.students;
  }
);

export const selectOneStudent = (id: string) =>
  createSelector([selectStudent], (students: any) =>
    students.find((student: Student) => id === student._id)
  );

export const selectAllStudents = createSelector(
  [selectStudents],
  students => students
);
