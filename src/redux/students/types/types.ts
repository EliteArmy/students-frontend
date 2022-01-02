import { Student } from '../../../interfaces/student';
import { studentActionTypes } from '../student.types';

export interface StudentsState {
  isFetching: boolean;
  students: Student[];
  errorMessage: string | null;
}

export interface FetchStudentsSuccessPayload {
  students: Student[];
}

export interface FetchStudentsFailurePayload {
  error: string;
}

// --- Get Data
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

export type StudentsActions =
  | FetchStudentsStart
  | FetchStudentsSuccess
  | FetchStudentsFailure;
