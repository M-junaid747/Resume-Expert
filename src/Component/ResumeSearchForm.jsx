// components/ResumeSearchForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import {
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

const ResumeSearchForm = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    if (!jobTitle || !jobDesc) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setSearchResult(null);

      const formData = new FormData();
      formData.append('jd_title', jobTitle);
      formData.append('jd_text', jobDesc);

      const response = await axios.post(
        'http://localhost:8000/api/search-resume',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (response.data) {
        setSearchResult(response.data);
      } else {
        setError('No matching resumes found.');
      }
    } catch (err) {
      console.error('Resume search failed:', err);
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #dbeafe, #f0f9ff)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
      }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', maxWidth: '800px' }}
      >
        <Paper elevation={6} sx={{ padding: 4, borderRadius: 6 }}>
          <Typography 
            variant="h4" 
            align="center" 
            fontWeight="bold" 
            gutterBottom
            sx={{ mb: 4 }}
          >
            Search Resume
          </Typography>

          <TextField
            fullWidth
            label="Job Title"
            variant="outlined"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            sx={{ marginBottom: 3 }}
          />

          <TextField
            fullWidth
            label="Job Description"
            variant="outlined"
            multiline
            rows={6}
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            sx={{ marginBottom: 3 }}
          />

          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{ 
                px: 5, 
                py: 1.5, 
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Search Resumes'}
            </Button>
          </Box>

          {searchResult && (
            <Box mt={5}>
              <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Top Matching Resume:
              </Typography>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Email:</strong> {searchResult.email}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Match Score:</strong> {searchResult.score}%
                </Typography>
                <Typography variant="body1">
                  <strong>Resume ID:</strong> {searchResult.resume_id}
                </Typography>
                <Typography>
                  <strong>File Path:</strong> {searchResult.file_path}
                </Typography>
              </Paper>
            </Box>
          )}
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ResumeSearchForm;
