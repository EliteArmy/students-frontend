import axios from 'axios';

import { Student } from '../../interfaces/student';

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
