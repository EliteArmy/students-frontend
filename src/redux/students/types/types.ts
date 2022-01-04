import { Student } from '../../../interfaces/student';
import { studentActionTypes } from '../student.types';

export interface StudentsState {
  isFetching: boolean;
  students: Student[];
  errorMessage: string | null;
}

// //////////////////////////////////////////////////////////////////

// --- Fetch Students
export interface FetchStudentsSuccessPayload {
  students: Student[];
}

export interface FetchStudentsFailurePayload {
  error: string;
}

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

// --- Delete Students
export interface DeleteStudentPayload {
  id: string;
}
export interface DeleteStudentSuccessPayload {
  student: Student;
}
export interface DeleteStudentFailurePayload {
  error: string;
}

// --- Update Student
export interface UpdateStudentPayload {
  student: Student;
}
export interface UpdateStudentSuccessPayload {
  student: Student;
}
export interface UpdateStudentFailurePayload {
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

// --- Delete Data ---
export interface DeleteStudentStart {
  type: typeof studentActionTypes.DELETE_START;
  payload: DeleteStudentPayload;
}

export type DeleteStudentSuccess = {
  type: typeof studentActionTypes.DELETE_SUCCESS;
  payload: DeleteStudentSuccessPayload;
};

export type DeleteStudentsFailure = {
  type: typeof studentActionTypes.DELETE_FAILURE;
  payload: DeleteStudentFailurePayload;
};

// --- Update Data ---
export interface UpdateStudentStart {
  type: typeof studentActionTypes.UPDATE_START;
  payload: UpdateStudentPayload;
}

export type UpdateStudentSuccess = {
  type: typeof studentActionTypes.UPDATE_SUCCESS;
  payload: UpdateStudentSuccessPayload;
};

export type UpdateStudentsFailure = {
  type: typeof studentActionTypes.UPDATE_FAILURE;
  payload: UpdateStudentFailurePayload;
};

// //////////////////////////////////////////////////////////////////

export type StudentsActions =
  | FetchStudentsStart
  | FetchStudentsSuccess
  | FetchStudentsFailure
  | RegisterStudentsStart
  | RegisterStudentsSuccess
  | RegisterStudentsFailure
  | DeleteStudentStart
  | DeleteStudentSuccess
  | DeleteStudentsFailure
  | UpdateStudentStart
  | UpdateStudentSuccess
  | UpdateStudentsFailure;
