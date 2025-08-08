import React, { useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

function JobDescriptionInput({ jobTitle, setJobTitle, jobDesc, setJobDesc }) {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!jobTitle || !jobDesc) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setUploadSuccess(false);

      const payload = {
        title: jobTitle,
        text: jobDesc,
      };

      const response = await axios.post('http://localhost:8000/api/upload-jd', payload, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data?.status === 'success') {
        setUploadSuccess(true);
      } else {
        setError('Upload failed. Try again.');
      }

    } catch (err) {
      console.error('Upload error:', err);
      setError('Server error. Please try again.');
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
        style={{ width: '100%', maxWidth: '700px' }}
      >
        <Paper elevation={6} sx={{ padding: 4, borderRadius: 6 }}>
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            Upload Job Description
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
          {uploadSuccess && <Alert severity="success" sx={{ mb: 2 }}>Job description uploaded successfully!</Alert>}

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              sx={{ px: 5, py: 1.5, borderRadius: '25px' }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Upload Job Description'}
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}

export default JobDescriptionInput;
