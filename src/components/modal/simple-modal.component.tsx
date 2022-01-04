import * as React from 'react';

import { Student } from '../../interfaces/student';

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

export interface SimpleDialogProps {
  open: boolean;
  selectedStudent: Student;
  label: string;
  onClose: (value: Student) => void;
}

function SimpleModal(props: SimpleDialogProps) {
  const { onClose, selectedStudent, open, label } = props;
  const { firstName, lastName, birthDate, email, address, gender } =
    selectedStudent;

  const handleClose = () => {
    onClose(selectedStudent);
  };

  const handleListItemClick = (value: Student) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{label}</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem button onClick={() => handleListItemClick(selectedStudent)}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${firstName}
          ${lastName} 
          ${birthDate}
          ${email}
          ${address}
          ${gender}`}
          />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default SimpleModal;
