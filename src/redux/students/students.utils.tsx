import { Student } from '../../interfaces/student';

export const updateStudent = (
  students: Student[],
  studentToUpdate: Student
) => {
  return students.map((student: Student) => {
    return student._id === studentToUpdate._id ? studentToUpdate : student;
  });
};

export const registerStudent = (
  students: Student[],
  studentToRegister: Student
) => {
  return [...students, { ...studentToRegister }];
};

export const removeStudent = (
  students: Student[],
  studentToRemove: Student
) => {
  return students.filter(
    (student: Student) => student._id !== studentToRemove._id
  );
};
