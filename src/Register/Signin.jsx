import React, { useState } from 'react';
import { Card, Box, Typography, TextField, Button, Grid, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CustomAleart from '../Component/Aleart';

export default function SignIn() {
  const [signInData, setSignInData] = useState({});
  const navigate=useNavigate();
  
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
        sx={{
          padding: '40px',
          maxWidth: '400px',
          width: '100%',
          borderRadius: '30px',
          background: 'linear-gradient(45deg, #2196F3,rgb(157, 200, 210))',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add transition for smooth animation
          '&:hover': {
            transform: 'scale(1.05)', // Scale up the card on hover
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)', // Add shadow on hover
          },
        }}
      >
        <Box textAlign="center" mb={3}>
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
              type='password'
              value={signInData.password || ''}
              required
              onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
             
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
            <Link to="/signup" >
            <Button
              color="secondary"
              style={{ textTransform: 'none', padding: 0, fontSize: 'inherit' }}
            >
              Sign Up
            </Button>
            </Link>
          </Typography>
        </form>
      </Card>
      <CustomAleart message={"user signIn Successfully"}/>
    </Grid>
  );
}
