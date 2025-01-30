import React from 'react';
import { Typography, Link } from '@mui/material';

const Links = ({ authMode, setAuthMode, handleForgotPassword }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      {authMode === 'signUp' && (
        <>
          <Typography variant="body2">
            Already have an account? <Link href="#" onClick={() => setAuthMode('login')} sx={{ color: 'green' }}>Login</Link>
          </Typography>
          <Typography variant="body2">
            Already have an email? <Link href="#" onClick={() => setAuthMode('signIn')} sx={{ color: 'green' }}>Sign In</Link>
          </Typography>
        </>
      )}

      {authMode === 'login' && (
        <>
          <Typography variant="body2">
            Don't have an account? <Link href="#" onClick={() => setAuthMode('signUp')} sx={{ color: 'green' }}>Sign Up</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" onClick={handleForgotPassword} sx={{ color: 'green' }}>Forgot Password?</Link>
          </Typography>
          <Typography variant="body2">
            Have an email? <Link href="#" onClick={() => setAuthMode('signIn')} sx={{ color: 'green' }}>Sign In</Link>
          </Typography>
        </>
      )}

      {authMode === 'signIn' && (
        <>
          <Typography variant="body2">
            Don't have an account? <Link href="#" onClick={() => setAuthMode('signUp')} sx={{ color: 'green' }}>Sign Up</Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" onClick={handleForgotPassword} sx={{ color: 'green' }}>Forgot Password?</Link>
          </Typography>
        </>
      )}
    </div>
  );
};

export default Links;
