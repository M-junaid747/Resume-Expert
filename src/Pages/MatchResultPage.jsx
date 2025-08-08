// Imports (same as before)
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Chip,
  Divider,
  Paper,
  Alert,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Layout from '../Layout/Layout';
import axios from 'axios';
import { motion } from 'framer-motion';

const MatchResultPage = () => {
  const location = useLocation();
  //const { jd_title } = location.state || {};

  const [loading, setLoading] = useState(false);
  const result = location.state;
  const [error, setError] = useState('');

  // useEffect(() => {
  //   const fetchMatch = async () => {
  //     try {
  //       const email = localStorage.getItem('userEmail');
  //     const jdText = localStorage.getItem('jobDescription');

  //     if (!email || !jdText) {
  //       setError('Missing email or job description.');
  //       setLoading(false);
  //       return;
  //     }

  //       const formData = new FormData();
  //        formData.append('email', email);
  //        formData.append('jd_text', jdText);

  //       const res = await axios.post('http://localhost:8000/api/match-resume/', formData);
  //       setResult(res.data);
  //     } catch (err) {
  //       setError(err.response?.data?.detail || 'Error fetching matching results.');
  //     }
  //     setLoading(false);
  //   };

  //   fetchMatch();
  //   }, []);

  const sectionStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    marginTop: '24px',
  };

  return (
    <Layout>
      <Container sx={{ py: 10, mt: 6, maxWidth: 'md' }}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper sx={sectionStyle}>
              <Typography variant="h4" gutterBottom>
                Resume Match Results
              </Typography>
              <Divider sx={{ mb: 2 }} />

                           <Typography variant="h2" sx={{ mt: 1, fontWeight: 'bold', color: '#0072ff' }}>
                Match Score: {result.match_score}%
              </Typography>

              {/* Skills Present */}
              <Box mt={4}>
                <Typography variant="subtitle1" fontWeight="bold" color="green">
                  Skills Present:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {result.skills_present?.length > 0 ? (
                    result.skills_present.map((skill, idx) => (
                      <Chip label={skill} color="success" key={idx} />
                    ))
                  ) : (
                    <Typography>No matching skills found.</Typography>
                  )}
                </Box>
              </Box>

              {/* Skills Missing */}
              <Box mt={3}>
                <Typography variant="subtitle1" fontWeight="bold" color="red">
                  Skills Missing:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {result.skills_missing?.length > 0 ? (
                    result.skills_missing.map((skill, idx) => (
                      <Chip label={skill} color="error" key={idx} />
                    ))
                  ) : (
                    <Typography>All required skills are present!</Typography>
                  )}
                </Box>
              </Box>

              {/* Recommended Skills */}
              <Box mt={3}>
                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                  Recommended Skills:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {result.recommended_skills?.length > 0 ? (
                    result.recommended_skills.map((skill, idx) => (
                      <Chip label={skill} key={idx} color="info" />
                    ))
                  ) : (
                    <Typography>No recommendations found.</Typography>
                  )}
                </Box>
              </Box>

              {/* Suggested Courses */}
              <Box mt={4}>
                <Typography variant="h4" fontWeight="bold">
                  Where to Get Missing Skills(Recommended Courses):
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Course Name</TableCell>
                        <TableCell>University</TableCell>
                        <TableCell>Link</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {result.suggested_courses?.slice(0,5).map((course, idx) => (
                        <TableRow key={idx}>
                          <TableCell>{course.name}</TableCell>
                          <TableCell>{course.university}</TableCell>
                          <TableCell>
                            <Link href={course.link} target="_blank" rel="noopener">
                              Visit
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              {/* Education & Experience */}
              {result.education && (
                <Box mt={3}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Education:
                  </Typography>
                  <Typography>{result.education}</Typography>
                </Box>
              )}

              {result.experience && (
                <Box mt={2}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Experience:
                  </Typography>
                  <Typography>{result.experience}</Typography>
                </Box>
              )}
            </Paper>
          </motion.div>
        )}
      </Container>
    </Layout>
  );
};

export default MatchResultPage;
