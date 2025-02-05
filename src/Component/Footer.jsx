import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
    component={motion.footer}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    sx={{
      // A dark gray gradient that's less intense than pure black
      background: 'linear-gradient(45deg, #2c2c2c, #4a4a4a)',
      color: '#fff',
      py: 6,
      px: 2,
    }}
  >
      <Grid container spacing={4} justifyContent="center">
        {/* About Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Resume Checker
          </Typography>
          <Typography variant="body2">
            Your one-stop solution for resume analysis and matching.
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Quick Links
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            Home<br />
            About Us<br />
            Services<br />
            Contact
          </Typography>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="#" sx={{ color: '#fff' }}>
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton href="#" sx={{ color: '#fff' }}>
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Resume Checker. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
