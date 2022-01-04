import { Student } from '../../interfaces/student';

export const removeStudent = (
  students: Student[],
  studentToRemove: Student
) => {
  return students.filter(
    (student: Student) => student._id !== studentToRemove._id
  );
};
