import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Student } from '../../interfaces/student';
import { registerStudentStart } from '../../redux/students/student.actions';

import InputField from '../form-input/input-field.component';

const Register = () => {
  const dispatch = useDispatch();

  const [displayError, setDisplayError] = useState('');

  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    email: '',
    address: '',
    gender: false,
  });

  const registerStartHandler = (student: Student) =>
    dispatch(registerStudentStart(student));

  const { firstName, lastName, birthDate, email, address, gender } = student;

  // Send values:
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log(event.target);
    // TODO: Validations

    registerStartHandler({
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
    <div>
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

        {/* <InputField
          fieldValue={student.birthDate}
          fieldName="birthDate"
          fieldPlaceholder="Birth Date"
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type="date"
          validationText={[`Field can't be empty`]}
        ></InputField> */}

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

        {/* <InputField
          fieldValue={student.gender}
          fieldName="gender"
          fieldPlaceholder="Gender"
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type="boolean"
          validationText={[`Field can't be empty`]}
        ></InputField> */}
      </form>
    </div>
  );
};

export default Register;
