import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Student } from '../../interfaces/student';
import { registerStudentStart } from '../../redux/students/student.actions';

import InputField from '../form-input/input-field.component';
import RadioButtonsGroup from '../form-radio/form-radio.component';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

const Register = () => {
  const dispatch = useDispatch();

  const [displayError, setDisplayError] = useState('');

  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    address: '',
    gender: false,
  });

  const registerStartHandler = (student: Student) =>
    dispatch(registerStudentStart({ student }));

  const { firstName, lastName, birthDate, email, address, gender } = student;

  // Send values:
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log(event.target);
    // TODO: Validations

    registerStartHandler({
      _id: '',
      firstName,
      lastName,
      birthDate,
      email,
      address,
      gender,
    });
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    console.log('name:', name, 'value:', value);

    // dinamic set value
    setStudent({ ...student, [name]: value });
  };

  return (
    <>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          fieldValue={student.firstName}
          fieldName="firstName"
          fieldPlaceholder="First Name"
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type="text"
          validationText={[`Field can't be empty`]}
        ></InputField>

        <InputField
          fieldValue={student.lastName}
          fieldName="lastName"
          fieldPlaceholder="Last Name"
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type="text"
          validationText={[`Field can't be empty`]}
        ></InputField>

        <InputField
          fieldValue={student.birthDate}
          fieldName="birthDate"
          fieldPlaceholder=""
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type="date"
          validationText={[`Field can't be empty`]}
        ></InputField>

        <InputField
          fieldValue={student.email}
          fieldName="email"
          fieldPlaceholder="Email"
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type="text"
          validationText={[`Field can't be empty`]}
        ></InputField>

        <InputField
          fieldValue={student.address}
          fieldName="address"
          fieldPlaceholder="Address"
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type="text"
          validationText={[`Field can't be empty`]}
        ></InputField>

        <RadioButtonsGroup></RadioButtonsGroup>

        <Box sx={{ flexGrow: 1 }}>
          <Button variant="contained" sx={{ my: 2, mr: 1 }}>
            Cancel
          </Button>
          <Button variant="contained" sx={{ my: 2, mr: 1 }}>
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Register;
