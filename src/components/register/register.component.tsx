import React, { useState } from 'react';

import InputField from '../form-input/input-field.component';

const Register = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    address: '',
    gender: '',
  });

  const [displayError, setDisplayError] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log(event.target);

    // signUpStartHandler({ displayName, email, password });
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
          fieldName='firstName'
          fieldPlaceholder='First Name'
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type='text'
          validationText={[`Field can't be empty`]}
        ></InputField>

        <InputField
          fieldValue={student.lastName}
          fieldName='lastName'
          fieldPlaceholder='Last Name'
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type='text'
          validationText={[`Field can't be empty`]}
        ></InputField>

        <InputField
          fieldValue={student.birthDate}
          fieldName='birthDate'
          fieldPlaceholder='Birth Date'
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type='text'
          validationText={[`Field can't be empty`]}
        ></InputField>

        <InputField
          fieldValue={student.email}
          fieldName='email'
          fieldPlaceholder='Email'
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type='text'
          validationText={[`Field can't be empty`]}
        ></InputField>

        <InputField
          fieldValue={student.address}
          fieldName='address'
          fieldPlaceholder='Address'
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type='text'
          validationText={[`Field can't be empty`]}
        ></InputField>

        <InputField
          fieldValue={student.gender}
          fieldName='gender'
          fieldPlaceholder='Gender'
          fieldTextError={displayError}
          onSetFieldName={handleChange}
          fieldRequired={true}
          type='text'
          validationText={[`Field can't be empty`]}
        ></InputField>
      </form>
    </div>
  );
};

export default Register;
