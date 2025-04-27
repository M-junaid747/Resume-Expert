import React from 'react';
import { Grid, Typography, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function JobDescriptionInput() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={8}>
        {/* Wrapping the form with Paper for styling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Job Description Input
            </Typography>

            <TextField
              fullWidth
              label="Job Title"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            
            <TextField
              fullWidth
              label="Job Responsibilities"
              variant="outlined"
              multiline
              rows={4}
              sx={{ marginBottom: 2 }}
            />

            <TextField
              fullWidth
              label="Required Qualifications"
              variant="outlined"
              multiline
              rows={4}
              sx={{ marginBottom: 2 }}
            />

            <TextField
              fullWidth
              label="Location"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />

            <TextField
              fullWidth
              label="Salary Range"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />

            <TextField
              fullWidth
              label="Application Deadline"
              variant="outlined"
              type="date"
              sx={{ marginBottom: 2 }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Grid container justifyContent="center">
              <Button variant="contained" color="primary">
                Submit Job Description
              </Button>
            </Grid>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );
}

export default JobDescriptionInput;
