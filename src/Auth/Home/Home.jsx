import React from 'react'
import Appbar from './Appbar'
import Counter from './Counter'
import { Grid2 } from '@mui/material'

export default function Home() {
  return (
   <>
    <Appbar/>
    <Grid2 container spacing={2} justifyContent={"center"} mt={5}>
      <Grid2 xs={6}>
        <Counter/>
      </Grid2>
    </Grid2>
   </>
  )
}

