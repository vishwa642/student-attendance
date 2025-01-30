import React from 'react';
import { Typography } from '@mui/material';

function Header({ authMode }) {
  return (
    <Typography variant="h5" sx={{ mb: 3 }}>
      {authMode === 'signUp'
        ? 'Student Sign Up'
        : authMode === 'signIn'
        ? 'Sign In'
        : 'Student Attendance Login'}
    </Typography>
  );
}

export default Header;
