import React from 'react'
import { Alert, Snackbar } from '@mui/material'

export default function CustomAleart({message,setMessage,open}) {
   if(message===null){
    return null
   }

  return (
    <div>
      <Snackbar
        open={true}
        autoHideDuration={6000}
        message={message}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
          <Alert severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      
    </div>
  )
}
