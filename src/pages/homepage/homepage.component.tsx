import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={10} sm={10}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default HomePage;
