import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar className="flex justify-center items-center">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="flex justify-center items-center">
            Ту-ДУ!!!!
        </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
