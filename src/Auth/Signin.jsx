import React, { useState } from 'react';
import { Card, Box, Typography, TextField, Button, Grid, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [signInData, setSignInData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  
  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);
  
  // Updated handleSubmit function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const dbEmail = process.env.REACT_APP_USER_EMAIL; // Accessing the env variable
    const dbPassword = process.env.REACT_APP_USER_PASSWORD; // Accessing the env variable
    
    console.log("Stored Email: ", dbEmail); 
    console.log("Stored Password: ", dbPassword);
    navigate('/home');
  };

  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}
    >
      <Card 
        elevation={6} 
        style={{
          padding: '40px',
          maxWidth: '400px',
          width: '100%',
          borderRadius: '30px',
        }}
      >
        <Box textAlign="center" mb={3} bgcolor={'yellow'}>
          <Typography variant="h4" component="h1" gutterBottom>
            Sign In
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Welcome back! Please enter your credentials to continue.
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              value={signInData.email || ''}
              type="email"
              required
              onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={signInData.password || ''}
              required
              onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box textAlign="center" mb={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ padding: '10px 0', fontSize: '16px' }}
            >
              Sign In
            </Button>
          </Box>
          <Typography variant="body2" color="textSecondary" align="center">
            Don’t have an account?{' '}
            <Button
              color="secondary"
              style={{ textTransform: 'none', padding: 0, fontSize: 'inherit' }}
            >
              Sign Up
            </Button>
          </Typography>
        </form>
      </Card>
    </Grid>
  );
}
