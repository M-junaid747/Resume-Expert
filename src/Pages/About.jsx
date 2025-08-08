import React from 'react';
import { Typography, Box, Container, Paper, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Layout from '../Layout/Layout';

export default function About() {
  return (
   <Layout>
     <Container maxWidth="lg" marginTop="150px" sx={{ padding: 4  }}>
      {/* Animated Box Container for the About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ textAlign: 'center', marginBottom: 4 ,marginTop:4}}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            About Resume Analyzer
          </Typography>
        </Box>
        
        {/* Description and Features Section */}
        <Grid container spacing={4}>
          {/* Card for Description */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card elevation={3} sx={{ borderRadius: 2 }}>
                <CardContent sx={{ padding: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                    What is Resume Analyzer?
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333', marginTop: 2 }}>
                    The Resume Analyzer is a tool designed to help job seekers optimize their resumes
                    for better chances of being noticed by hiring managers. It evaluates various elements of 
                    your resume, including content, formatting, and keywords.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Card for Key Features */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card elevation={3} sx={{ borderRadius: 2 }}>
                <CardContent sx={{ padding: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                    Key Features
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333', marginTop: 2 }}>
                    <ul style={{ paddingLeft: 20 }}>
                      <li>ATS-friendly optimization</li>
                      <li>Keyword analysis to match job descriptions</li>
                      <li>Content improvement suggestions</li>
                      <li>Instant resume score and feedback</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Call to Action Section */}
        <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Card elevation={3} sx={{ padding: 4, textAlign: 'center', maxWidth: 600, borderRadius: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Start Analyzing Your Resume Today
              </Typography>
              <Typography variant="body1" sx={{ color: '#333', marginTop: 2 }}>
                Take the first step towards landing your dream job by optimizing your resume. 
                Get valuable insights and improve your chances of being noticed by recruiters.
              </Typography>
            </Card>
          </motion.div>
        </Grid>
      </motion.div>
    </Container>
   </Layout>
  );
}
