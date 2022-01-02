import { Student } from '../../../interfaces/student';
import { studentActionTypes } from '../student.types';

export interface StudentsState {
  isFetching: boolean;
  students: Student[];
  errorMessage: string | null;
}

// --- Fetch Students
export interface FetchStudentsSuccessPayload {
  students: Student[];
}

export interface FetchStudentsFailurePayload {
  error: string;
}

// //////////////////////////////////////////////////////////////////

// --- Register Students
export interface RegisterStudentPayload {
  student: Student;
}

export interface RegisterStudentsSuccessPayload {
  student: Student;
}

export interface RegisterStudentsFailurePayload {
  error: string;
}

// //////////////////////////////////////////////////////////////////

// --- Get Data ---
export interface FetchStudentsStart {
  type: typeof studentActionTypes.FETCH_START;
}

export type FetchStudentsSuccess = {
  type: typeof studentActionTypes.FETCH_SUCCESS;
  payload: FetchStudentsSuccessPayload;
};

export type FetchStudentsFailure = {
  type: typeof studentActionTypes.FETCH_FAILURE;
  payload: FetchStudentsFailurePayload;
};

// --- Save Data ---
export interface RegisterStudentsStart {
  type: typeof studentActionTypes.REGISTER_START;
  payload: RegisterStudentPayload;
}

export type RegisterStudentsSuccess = {
  type: typeof studentActionTypes.REGISTER_SUCCESS;
  payload: RegisterStudentsSuccessPayload;
};

export type RegisterStudentsFailure = {
  type: typeof studentActionTypes.REGISTER_FAILURE;
  payload: RegisterStudentsFailurePayload;
};

export type StudentsActions =
  | FetchStudentsStart
  | FetchStudentsSuccess
  | FetchStudentsFailure
  | RegisterStudentsStart
  | RegisterStudentsSuccess
  | RegisterStudentsFailure;
