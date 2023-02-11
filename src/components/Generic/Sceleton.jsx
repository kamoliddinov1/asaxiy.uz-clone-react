import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <div>
      <Skeleton variant="rounded" width="100%" height={190} />
      <Box >
        <Skeleton width="80%" height={35}/>
        <Skeleton width="100%" height={35}/>
      </Box>
    </div>
  )
}

export default App