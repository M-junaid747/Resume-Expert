import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Layout from '../Layout/Layout';

export default function User() {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Card
            sx={{
              maxWidth: 400,
              padding: 3,
              borderRadius: 3,
              boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
              textAlign: 'center',
              backgroundColor: '#fff',
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: 2,
                }}
              >
                User Profile
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#666',
                }}
              >
                Welcome to the user dashboard. Here you can manage your profile and settings.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </Layout>
  );
}
