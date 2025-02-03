import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #6dd5ed, #2193b0)',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        mt: 5,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          marginBottom: 3,
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        }}
      >
        {count}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#218838',
            },
          }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#dc3545',
            color: 'white',
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#c82333',
            },
          }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ffc107',
            color: 'white',
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#e0a800',
            },
          }}
          onClick={() => setCount(0)}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
}
