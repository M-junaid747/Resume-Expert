import React, { useState, useEffect } from 'react';
import ResumeUpload from '../Component/FileUpload';
import JDinput from '../Component/JDinput';
import { Container, Box, Typography, Button, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function FileUploadPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [error, setError] = useState('');

  const handleInsightsClick = async () => {
    try {
      const email = localStorage.getItem('userEmail');
      if (!email || !jobDesc) {
        setError('Make sure resume is uploaded and job description is filled.');
        return;
      }

      const formData = new FormData();
      formData.append('email', email);
      formData.append('jd_text', jobDesc);

      const response= await axios.post('http://localhost:8000/api/match-resume', formData);

      navigate('/result', { state: response.data });
    } catch (err) {
      console.error('Matching failed:', err);
      setError('Failed to process insights. Try again.');
    }
  };

  return (
    <Layout>
      <Container maxWidth="md" sx={{ py: 4, pt: '100px', backgroundColor: '#e5e6e3' }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Typography variant="h3" sx={{
              background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}>
              Resume Expert
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <Typography variant="subtitle1" color="textSecondary">
              Upload your resume and job description to get smart insights.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ mb: 6 }}>
          <ResumeUpload />
        </Box>

        <Box sx={{ mb: 6 }}>
          <JDinput
            jobTitle={jobTitle}
            setJobTitle={setJobTitle}
            jobDesc={jobDesc}
            setJobDesc={setJobDesc}
          />
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleInsightsClick}
              sx={{
                background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                color: '#fff',
                px: 5,
                py: 1.5,
                borderRadius: '30px',
                fontWeight: 'bold',
                boxShadow: '0px 4px 15px rgba(0, 114, 255, 0.4)',
                textTransform: 'none',
              }}
            >
              Get Insights
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Layout>
  );
}
