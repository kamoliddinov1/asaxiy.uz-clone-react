import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <div>
      <Skeleton variant="rounded" width="100%" height={200} />
      <Box >
        <Skeleton width="90%" height={30}/>
        <Skeleton width="80%" height={30}/>
        <Skeleton width="100%" height={30}/>
      </Box>
    </div>
  )
}

export default App