import { studentActionTypes } from './student.types';

import {
  FetchStudentsStart,
  FetchStudentsSuccess,
  FetchStudentsSuccessPayload,
  FetchStudentsFailure,
  FetchStudentsFailurePayload,
  RegisterStudentsStart,
  RegisterStudentPayload,
  RegisterStudentsSuccess,
  RegisterStudentsSuccessPayload,
  RegisterStudentsFailure,
  RegisterStudentsFailurePayload,
  UpdateStudentStart,
  UpdateStudentPayload,
  UpdateStudentSuccess,
  UpdateStudentSuccessPayload,
  UpdateStudentsFailure,
  UpdateStudentFailurePayload,
  DeleteStudentStart,
  DeleteStudentPayload,
  DeleteStudentSuccess,
  DeleteStudentSuccessPayload,
  DeleteStudentsFailure,
  DeleteStudentFailurePayload,
} from './types/types';

// ----- Fetch all students -----
export const fetchStudentStart = (): FetchStudentsStart => ({
  type: studentActionTypes.FETCH_START,
});

export const fetchStudentSuccess = (
  payload: FetchStudentsSuccessPayload
): FetchStudentsSuccess => ({
  type: studentActionTypes.FETCH_SUCCESS,
  payload,
});

export const fetchStudentFailure = (
  payload: FetchStudentsFailurePayload
): FetchStudentsFailure => ({
  type: studentActionTypes.FETCH_FAILURE,
  payload,
});

// ----- For student registration -----
export const registerStudentStart = (
  payload: RegisterStudentPayload
): RegisterStudentsStart => ({
  type: studentActionTypes.REGISTER_START,
  payload,
});

export const registerStudentSuccess = (
  payload: RegisterStudentsSuccessPayload
): RegisterStudentsSuccess => ({
  type: studentActionTypes.REGISTER_SUCCESS,
  payload,
});

export const registerStudentFailure = (
  payload: RegisterStudentsFailurePayload
): RegisterStudentsFailure => ({
  type: studentActionTypes.REGISTER_FAILURE,
  payload,
});

// ----- For student deletion -----
export const deleteStudentStart = (
  payload: DeleteStudentPayload
): DeleteStudentStart => ({
  type: studentActionTypes.DELETE_START,
  payload,
});

export const deleteStudentSuccess = (
  payload: DeleteStudentSuccessPayload
): DeleteStudentSuccess => ({
  type: studentActionTypes.DELETE_SUCCESS,
  payload,
});

export const deleteStudentFailure = (
  payload: DeleteStudentFailurePayload
): DeleteStudentsFailure => ({
  type: studentActionTypes.DELETE_FAILURE,
  payload,
});

// ----- For student Update -----
export const updateStudentStart = (
  payload: UpdateStudentPayload
): UpdateStudentStart => ({
  type: studentActionTypes.UPDATE_START,
  payload,
});

export const updateStudentSuccess = (
  payload: UpdateStudentSuccessPayload
): UpdateStudentSuccess => ({
  type: studentActionTypes.UPDATE_SUCCESS,
  payload,
});

export const updateStudentFailure = (
  payload: UpdateStudentFailurePayload
): UpdateStudentsFailure => ({
  type: studentActionTypes.UPDATE_FAILURE,
  payload,
});
