import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';
const Progress = () => {
    return (
        // <div className='progress-container'>

        // </div>
        // <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        //     <CircularProgress variant="determinate" value={75} />
        //     <Box
        //         sx={{
        //             top: 0,
        //             left: 0,
        //             bottom: 0,
        //             right: 0,
        //             position: 'absolute',
        //             display: 'flex',
        //             alignItems: 'center',
        //             justifyContent: 'center',
        //         }}
        //     >
        //         <Typography variant="caption" component="div" color="text.secondary">
        //             {`75%`}
        //         </Typography>
        //     </Box>
        // </Box>
        <span className="loader"></span>
    )
}

export default Progress