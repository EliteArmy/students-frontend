import isEmpty from 'validator/lib/isEmpty';
import isLength from 'validator/lib/isLength';
import isEmail from 'validator/es/lib/isEmail';

import {
  MIN_FIRST_NAME_LENGTH,
  MIN_LAST_NAME_LENGTH,
  MIN_ADDRESS_LENGTH,
  MAX_FIRST_NAME_LENGTH,
  MAX_LAST_NAME_LENGTH,
  MAX_ADDRESS_LENGTH,
} from './config';

const isValidEmail = (email: string) => {
  return isEmail(email.trim(), { ignore_max_length: false });
};

// check if the string has a length of zero.
export const isFieldEmpty = (stringValue: string) => {
  return isEmpty(stringValue);
};

// check if the string's length falls in a range.
export const isLengthMinMax = (
  stringValue: string,
  minVal: number,
  maxVal: number
) => {
  console.log(
    stringValue,
    minVal,
    maxVal,
    isLength(stringValue, { min: minVal, max: maxVal })
  );
  return isLength(stringValue, { min: minVal, max: maxVal });
};

export const emailValidations = (email: string) => {
  if (isFieldEmpty(email)) {
    const error = new Error('Email cannot be empty');
    error.name = 'email';
    throw error;
  }

  if (!isValidEmail(email)) {
    const error = new Error('Email is not valid');
    error.name = 'email';
    throw error;
  }
};

export const firstNameValidations = (firstName: string) => {
  if (isFieldEmpty(firstName)) {
    const error = new Error('First Name cannot be empty');
    error.name = 'firstName';
    throw error;
  }

  if (
    !isLengthMinMax(firstName, MIN_FIRST_NAME_LENGTH, MAX_FIRST_NAME_LENGTH)
  ) {
    const error = new Error(
      `First name should be between ${MIN_FIRST_NAME_LENGTH} to ${MAX_FIRST_NAME_LENGTH} letters`
    );
    error.name = 'firstName';
    throw error;
  }
};

export const lastNameValidations = (lastName: string) => {
  if (isFieldEmpty(lastName)) {
    const error = new Error('Last Name cannot be empty');
    error.name = 'lastName';
    throw error;
  }

  if (!isLengthMinMax(lastName, MIN_LAST_NAME_LENGTH, MAX_LAST_NAME_LENGTH)) {
    const error = new Error(
      `Last name should be between ${MIN_LAST_NAME_LENGTH} to ${MAX_LAST_NAME_LENGTH} letters`
    );
    error.name = 'lastName';
    throw error;
  }
};

export const addressValidations = (address: string) => {
  if (isFieldEmpty(address)) {
    const error = new Error('Address cannot be empty');
    error.name = 'address';
    throw error;
  }

  if (!isLengthMinMax(address, MIN_ADDRESS_LENGTH, MAX_ADDRESS_LENGTH)) {
    const error = new Error(
      `Address should be between ${MIN_ADDRESS_LENGTH} to ${MAX_ADDRESS_LENGTH} letters`
    );
    error.name = 'address';
    throw error;
  }
};

export const birthDateValidations = (birthDate: string) => {
  if (isFieldEmpty(birthDate)) {
    const error = new Error('Birthdate cannot be empty');
    error.name = 'birthDate';
    throw error;
  }

  let timestamp = Date.parse(birthDate);

  if (isNaN(timestamp)) {
    const error = new Error('Birthdate is not correct');
    error.name = 'birthDate';
    throw error;
  }
};
