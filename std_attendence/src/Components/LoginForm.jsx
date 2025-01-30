import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const LoginForm = ({ authMode, studentID, setStudentID, email, setEmail, password, setPassword, handleSubmit, loginMessage, messageType }) => {
  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      {/* Student ID or Email */}
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="studentID"
        label={authMode === 'signIn' ? 'Email' : 'Student ID'}
        value={authMode === 'signIn' ? email : studentID}
        onChange={(e) => authMode === 'signIn' ? setEmail(e.target.value) : setStudentID(e.target.value)}
        autoFocus
      />

      {/* Password Field */}
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
      >
        {authMode === 'signUp' ? 'Sign Up' : authMode === 'signIn' ? 'Sign In' : 'Login'}
      </Button>

      {/* Login Message */}
      <Typography variant="body2" color={messageType === 'success' ? 'green' : 'red'} sx={{ textAlign: 'center' }}>
        {loginMessage}
      </Typography>
    </form>
  );
};

export default LoginForm;
