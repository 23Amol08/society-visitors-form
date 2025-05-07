import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ApartmentIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minal Residency
          </Typography>
          <Button color="inherit" component={RouterLink} to="/" >Visitor Form</Button>
          <Button color="inherit" component={RouterLink} to="/visitor-logs" >Visitors Logs</Button>
        </Toolbar>
      </AppBar>
    </Box>
);
};

export default Navbar;
