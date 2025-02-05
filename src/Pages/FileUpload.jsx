import React from 'react';
import ResumeUpload from '../Component/FileUpload';
import { Container, Box, Typography } from '@mui/material';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import Layout from '../Layout/Layout';
import { motion } from 'framer-motion';

// Dummy data for the sample chart
const sampleData = [
  { name: 'Skills', count: 120 },
  { name: 'Experience', count: 98 },
  { name: 'Education', count: 86 },
  { name: 'Certifications', count: 99 },
  { name: 'Projects', count: 85 },
];

export default function FileUploadPage() {
  return (
  <Layout>
      <Container margin="auto" maxWidth="md" sx={{ py: 4 ,mt:4,backgroundColor:"#e5e6e3"}}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '3rem' },
            textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          Resume Analyzer
        </Typography>
      </motion.div>

      {/* Animated Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      >
        <Typography variant="subtitle1" color="textSecondary">
          Upload your resume to get insights into your skills, experience, and more.
        </Typography>
      </motion.div>
    </Box>

      {/* Resume Upload Section */}
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
        <ResumeUpload />
      </Box>

      {/* Text Analysis Chart Section */}
      <Box
        sx={{
          mb: 4,
          p: 3,
          backgroundColor: '#f5f5f5',
          borderRadius: '12px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Text Analysis
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          The chart below represents a sample analysis of your resume content.
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  </Layout>
  );
}

