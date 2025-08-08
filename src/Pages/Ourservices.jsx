import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function Ourservices() {
  return (
    <layout> 
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Our Services
          </Typography>
          <Typography variant="body1" sx={{ color: '#333', marginTop: 2 }}>
            We offer a variety of services to help you optimize and perfect your resume for job success. Explore our services below!
          </Typography>
        </Box>
      </motion.div>

      {/* Services Cards */}
      <Grid container spacing={4}>
        {/* Service 1: Resume Optimization */}
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent sx={{ padding: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Resume Optimization
                </Typography>
                <Typography variant="body2" sx={{ color: '#333', marginTop: 2 }}>
                  Our Resume Optimization service helps you tailor your resume to pass through Applicant Tracking Systems (ATS). 
                  We ensure your resume is formatted properly and includes all relevant keywords to increase your chances of getting noticed.
                </Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Service 2: Cover Letter Writing */}
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent sx={{ padding: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Cover Letter Writing
                </Typography>
                <Typography variant="body2" sx={{ color: '#333', marginTop: 2 }}>
                  A great cover letter can make a big difference in your job search. We help you craft personalized, impactful cover letters 
                  that stand out to hiring managers and complement your resume.
                </Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Service 3: Job Interview Coaching */}
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent sx={{ padding: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Job Interview Coaching
                </Typography>
                <Typography variant="body2" sx={{ color: '#333', marginTop: 2 }}>
                  Ace your interviews with personalized coaching sessions. We provide tips and strategies to help you prepare, build confidence, 
                  and perform at your best during interviews.
                </Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
    </layout>
  );
}
