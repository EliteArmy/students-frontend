import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';
import { Button } from '@mui/material';

import { Student } from '../../interfaces/student';

import { updateStudentStart } from '../../redux/students/student.actions';
import { selectOneStudent } from '../../redux/students/student.selectors';

import InputField from '../form-input/input-field.component';
import RadioButtonsGroup from '../form-radio/form-radio.component';

const Update = () => {
  const dispatch = useDispatch();
  const { studentId = '' } = useParams();

  const [displayError, setDisplayError] = useState('');

  const [student, setStudent] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    address: '',
    gender: true,
  });

  const updateStudent = useSelector(selectOneStudent(studentId));

  useEffect(() => {
    getStudentWithId();
  }, []);

  const getStudentWithId = () => {
    if (!updateStudent) {
      return;
    }
    const { _id, firstName, lastName, birthDate, email, address, gender } =
      updateStudent;

    setStudent({
      _id,
      firstName,
      lastName,
      birthDate: birthDate.substring(0, 10),
      email,
      address,
      gender,
    });
  };

  const updateStartHandler = (student: Student) =>
    dispatch(updateStudentStart({ student }));

  // Send values:
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const { firstName, lastName, birthDate, email, address, gender } = student;

    updateStartHandler({
      _id: studentId,
      firstName,
      lastName,
      birthDate,
      email,
      address,
      gender,
    });

    clearInputs();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // dinamic set value
    setStudent({ ...student, [name]: value });
  };

  const clearInputs = () => {
    setStudent({
      _id: '',
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

        <RadioButtonsGroup
          options={[
            { label: 'male', value: true },
            { label: 'female', value: false },
          ]}
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
            Update
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Update;
