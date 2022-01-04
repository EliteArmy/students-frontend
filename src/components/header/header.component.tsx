import React from 'react';

import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Button color="inherit" onClick={() => navigate('/new')}>
            Add Student
          </Button>
          <Button color="inherit" onClick={() => navigate('/')}>
            Students List
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
