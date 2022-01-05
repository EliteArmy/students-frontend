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
import { blue } from '@mui/material/colors';
import ListItemIcon from '@mui/material/ListItemIcon';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import DateRangeIcon from '@mui/icons-material/DateRange';

export interface SimpleDialogProps {
  open: boolean;
  selectedStudent: Student;
  label: string;
  onClose: () => void;
}

function SimpleModal(props: SimpleDialogProps) {
  const { onClose, selectedStudent, open, label } = props;

  const { firstName, lastName, birthDate, email, address, gender } =
    selectedStudent;
  const formatDate = birthDate.substring(0, 10);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{label}</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${firstName} ${lastName}`} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText primary={formatDate} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={address} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary={email} />
        </ListItem>

        <ListItem>
          <ListItemIcon>{gender ? <MaleIcon /> : <FemaleIcon />}</ListItemIcon>
          <ListItemText primary={gender ? 'Male' : 'Female'} />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default SimpleModal;
