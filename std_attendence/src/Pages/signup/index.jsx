import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const SignUpPage = ({ studentID, setStudentID, password, setPassword, handleSignUp, loginMessage, messageType }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" gutterBottom>Sign Up</Typography>
      <form onSubmit={handleSignUp}>
        <TextField
          label="Student ID"
          variant="outlined"
          fullWidth
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      {loginMessage && (
        <Typography variant="body2" color={messageType === 'error' ? 'error' : 'success'}>
          {loginMessage}
        </Typography>
      )}
    </Box>
  );
};

export default SignUpPage;
