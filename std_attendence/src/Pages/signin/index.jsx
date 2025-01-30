import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const SignInPage = ({ email, setEmail, password, setPassword, handleSignIn, loginMessage, messageType }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" gutterBottom>Sign In</Typography>
      <form onSubmit={handleSignIn}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Sign In
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

export default SignInPage;
