import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Avatar, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { motion } from 'framer-motion';

const CustomAppBar = ({ handleMenuClick, handleClick }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(45deg, #2196F3, #21CBF3)', // Color gradient for AppBar
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Shadow effect
        height: '80px', // Adjusting the height for better spacing
        backdropFilter: 'blur(8px)', // Adding a blur effect behind the AppBar
      }}
    >
      <Toolbar>
        {/* Left Section: Menu Icon and Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
              Resume Analyzer
            </Typography>
          </motion.div>
        </Box>

        {/* Right Section: Login/Sign Up and Profile Avatar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        

          {/* Navigation Links */}
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white', fontWeight: 'bold', '&:hover': { backgroundColor: '#1976d2', color: '#fff' } }}>
              Home
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white', fontWeight: 'bold', '&:hover': { backgroundColor: '#1976d2', color: '#fff' } }}>
              About
            </Button>
          </Link>
          <Link to="/contactus" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white', fontWeight: 'bold', '&:hover': { backgroundColor: '#1976d2', color: '#fff' } }}>
              Contact Us
            </Button>
          </Link>
          <Link to="/ourservices" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white', fontWeight: 'bold', '&:hover': { backgroundColor: '#1976d2', color: '#fff' } }}>
              Our Services
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
