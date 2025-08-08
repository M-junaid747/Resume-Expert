import React from 'react';
import { Typography, Box, Container, TextField, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Layout from '../Layout/Layout';

export default function ContactUs() {
  return (
    <Layout>
    <Container maxWidth="md" marginTop="150px" sx={{ padding: 4 }}>
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ textAlign: 'center', marginBottom: 4, marginTop:4 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ color: '#333', marginTop: 2 }}>
            Have any questions or need assistance? Reach out to us and we'll be happy to help!
          </Typography>
        </Box>
      </motion.div>

      {/* Contact Form Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Send Us a Message
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ backgroundColor: '#f9f9f9' }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ backgroundColor: '#f9f9f9' }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={4}
                  sx={{ backgroundColor: '#f9f9f9' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  type="submit"
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        {/* Contact Information Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Our Contact Information
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1" sx={{ color: '#333' }}>
                  <strong>Phone:</strong> +1 (123) 456-7890
                </Typography>
                <Typography variant="body1" sx={{ color: '#333' }}>
                  <strong>Email:</strong> contact@resumeanalyzer.com
                </Typography>
                <Typography variant="body1" sx={{ color: '#333' }}>
                  <strong>Address:</strong> 123 Resume Street, Suite 101, Job City, Pakistan
                </Typography>

                <Box sx={{ marginTop: 3 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, marginTop: 1 }}>
                    <Button variant="outlined" color="primary" href="https://facebook.com" target="_blank">
                      Facebook
                    </Button>
                    <Button variant="outlined" color="primary" href="https://twitter.com" target="_blank">
                      Twitter
                    </Button>
                    <Button variant="outlined" color="primary" href="https://linkedin.com" target="_blank">
                      LinkedIn
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
    </Layout>
  );
}
