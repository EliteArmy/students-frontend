import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  MIN_FIRST_NAME_LENGTH,
  MAX_FIRST_NAME_LENGTH,
  MIN_LAST_NAME_LENGTH,
  MAX_LAST_NAME_LENGTH,
  MIN_ADDRESS_LENGTH,
  MAX_ADDRESS_LENGTH,
} from '../../utilities/config';

import {
  firstNameValidations,
  lastNameValidations,
  emailValidations,
  addressValidations,
  birthDateValidations,
} from '../../utilities/validations';

import { Button } from '@mui/material';
import { Box } from '@mui/material';

import { Student } from '../../interfaces/student';

import { registerStudentStart } from '../../redux/students/student.actions';

import InputField from '../form-input/input-field.component';
import RadioButtonsGroup from '../form-radio/form-radio.component';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayError, setDisplayError] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    address: '',
    gender: '',
  });

  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    address: '',
    gender: false,
  });

  const { firstName, lastName, birthDate, email, address, gender } = student;

  const registerStartHandler = (student: Student) =>
    dispatch(registerStudentStart({ student }));

  // Send values:
  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      resetStatus();
      validations();

      registerStartHandler({
        _id: '',
        firstName,
        lastName,
        birthDate,
        email,
        address,
        gender,
      });

      clearInputs();
      navigate('/');
    } catch (error: any) {
      setDisplayError({ ...displayError, [error.name]: error.message });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    resetStatus();
    const { name, value } = event.target;

    setStudent({ ...student, [name]: value });
  };

  const validations = () => {
    firstNameValidations(student.firstName);
    lastNameValidations(student.lastName);
    emailValidations(student.email);
    addressValidations(student.address);
    birthDateValidations(student.birthDate);
  };

  const resetStatus = () => {
    setDisplayError({
      firstName: '',
      lastName: '',
      birthDate: '',
      email: '',
      address: '',
      gender: '',
    });
  };

  const clearInputs = () => {
    setStudent({
      firstName: '',
      lastName: '',
      birthDate: '',
      email: '',
      address: '',
      gender: true,
    });
  };

  return (
    <>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          fieldValue={student.firstName}
          fieldName="firstName"
          fieldPlaceholder="First Name"
          fieldTextError={displayError.firstName}
          onSetFieldName={handleChange}
          fieldRequired={false}
          type="text"
          validationText={[
            `First name should be between ${MIN_FIRST_NAME_LENGTH} to ${MAX_FIRST_NAME_LENGTH} letters`,
          ]}
        ></InputField>

        <InputField
          fieldValue={student.lastName}
          fieldName="lastName"
          fieldPlaceholder="Last Name"
          fieldTextError={displayError.lastName}
          onSetFieldName={handleChange}
          fieldRequired={false}
          type="text"
          validationText={[
            `Last name should be between ${MIN_LAST_NAME_LENGTH} to ${MAX_LAST_NAME_LENGTH} letters`,
          ]}
        ></InputField>

        <InputField
          fieldValue={student.birthDate}
          fieldName="birthDate"
          fieldPlaceholder=""
          fieldTextError={displayError.birthDate}
          onSetFieldName={handleChange}
          fieldRequired={false}
          type="date"
          validationText={[`Field can't be empty`]}
        ></InputField>

        <InputField
          fieldValue={student.email}
          fieldName="email"
          fieldPlaceholder="Email"
          fieldTextError={displayError.email}
          onSetFieldName={handleChange}
          fieldRequired={false}
          type="text"
          validationText={[`Email can't be empty`]}
        ></InputField>

        <InputField
          fieldValue={student.address}
          fieldName="address"
          fieldPlaceholder="Address"
          fieldTextError={displayError.address}
          onSetFieldName={handleChange}
          fieldRequired={false}
          type="text"
          validationText={[
            `Address should be between ${MIN_ADDRESS_LENGTH} to ${MAX_ADDRESS_LENGTH} letters`,
          ]}
        ></InputField>

        <RadioButtonsGroup
          options={[
            { label: 'male', value: true },
            { label: 'female', value: false },
          ]}
          defValue={student.gender ?? true}
          radioName={'gender'}
          radioLabel={'Gender'}
          onSetRadio={handleChange}
        ></RadioButtonsGroup>

        <Box sx={{ flexGrow: 1 }}>
          <Button
            variant="contained"
            onClick={clearInputs}
            sx={{ my: 2, mr: 1 }}
          >
            Cancel
          </Button>

          <Button type="submit" variant="contained" sx={{ my: 2, mr: 1 }}>
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Register;
