import React from 'react';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface FormProps {
  fieldValue: string;
  fieldName: string;
  fieldPlaceholder: string;
  fieldRequired: boolean;
  fieldTextError: string;
  type: string;
  validationText: string[];
  onSetFieldName: Function;
}

const InputField = (props: FormProps) => {
  const {
    fieldValue,
    fieldName,
    fieldPlaceholder,
    fieldRequired,
    fieldTextError,
    type,
    onSetFieldName,
    validationText,
  } = props;

  const handleChange = (event: any) => {
    onSetFieldName(event);
  };

  const renderHelperText = () => {
    if (validationText) {
      return (
        <List dense={true}>
          {(validationText || []).map(text => (
            <ListItem key={text} disableGutters>
              <ListItemText secondary={text} />
            </ListItem>
          ))}
        </List>
      );
    } else return null;
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
      margin="normal"
      error={fieldTextError ? true : false}
      required={fieldRequired}
    >
      <InputLabel htmlFor={fieldName}>{fieldPlaceholder}</InputLabel>

      <OutlinedInput
        id={fieldName}
        name={fieldName}
        value={fieldValue}
        label={fieldPlaceholder}
        type={type}
        placeholder={fieldPlaceholder}
        aria-describedby={`helper-text-${fieldName}`}
        onChange={handleChange}
      />

      <FormHelperText id={`helper-text-${fieldName}`}>
        {fieldTextError ? fieldTextError : null}
      </FormHelperText>

      {renderHelperText()}
    </FormControl>
  );
};

export default InputField;
