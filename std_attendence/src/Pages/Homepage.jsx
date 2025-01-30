import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
      <Typography variant="h4">Welcome to the Student Attendance System</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Please log in to access the system.
      </Typography>
      <Button component={Link} to="/login" variant="contained" sx={{ marginTop: 2 }}>
        Go to Login
      </Button>
    </Box>
  );
};

export default HomePage;
