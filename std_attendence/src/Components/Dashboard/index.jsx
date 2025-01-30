import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Welcome to the Student Attendance System Dashboard.
      </Typography>

      <Button
        component={Link}
        to="/login"
        variant="outlined"
        sx={{ marginTop: 2, marginRight: 1 }}
      >
        Go to Login
      </Button>

      <Button
        component={Link}
        to="/signup"
        variant="outlined"
        sx={{ marginTop: 2 }}
      >
        Go to Sign Up
      </Button>
    </Box>
  );
};

export default DashboardPage;
