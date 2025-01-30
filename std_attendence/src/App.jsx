import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/login';
import Links from './Components/Links';
import SignInPage from './Pages/signin'; 
import SignUpPage from './Pages/signup';  
import Dashboard from './Pages/Dashboard';

function App() {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [authMode, setAuthMode] = useState('login');

  const handleLogin = (e) => {
    e.preventDefault();
    if (studentID && password) {
      setLoginMessage(`Welcome, Student ID: ${studentID}!`);
      setMessageType('success');
      setStudentID('');
      setPassword('');
    } else {
      setLoginMessage('Please fill out both fields.');
      setMessageType('error');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (studentID && password) {
      setLoginMessage('Account successfully created!');
      setMessageType('success');
      setAuthMode('login');
      setStudentID('');
      setPassword('');
    } else {
      setLoginMessage('Please fill out both fields.');
      setMessageType('error');
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      setLoginMessage(`Welcome, ${email}!`);
      setMessageType('success');
      setEmail('');
      setPassword('');
    } else {
      setLoginMessage('Please fill out both fields.');
      setMessageType('error');
    }
  };

  const handleForgotPassword = () => {
    setLoginMessage('A password reset link has been sent to your email.');
    setMessageType('success');
  };

  return (
    <Router>
      <Container component="main" maxWidth="xs">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/Login"
              element={
                <Login
                  authMode={authMode}
                  studentID={studentID}
                  setStudentID={setStudentID}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleSubmit={authMode === 'signUp' ? handleSignUp : authMode === 'signIn' ? handleSignIn : handleLogin}
                  loginMessage={loginMessage}
                  messageType={messageType}
                />
              }
            />
            <Route
              path="/signIn"
              element={
                <SignInPage
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleSignIn={handleSignIn}
                  loginMessage={loginMessage}
                  messageType={messageType}
                />
              }
            />
            <Route
              path="/signUp"
              element={
                <SignUpPage
                  studentID={studentID}
                  setStudentID={setStudentID}
                  password={password}
                  setPassword={setPassword}
                  handleSignUp={handleSignUp}
                  loginMessage={loginMessage}
                  messageType={messageType}
                />
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Links authMode={authMode} setAuthMode={setAuthMode} handleForgotPassword={handleForgotPassword} />
        </Box>
      </Container>
    </Router>
  );
}

export default App;
