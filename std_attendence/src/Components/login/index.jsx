import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (studentID && password) {
      setLoginMessage(`Welcome, Student ID: ${studentID}`);
    } else {
      setLoginMessage('Please fill out both fields.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: '400px' }}>
        <TextField
          label="Student ID"
          variant="outlined"
          fullWidth
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
      {loginMessage && (
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          {loginMessage}
        </Typography>
      )}
      <Button component={Link} to="/" variant="outlined" sx={{ marginTop: 2 }}>
        Back to Home
      </Button>
    </Box>
  );
};

export default LoginPage;
