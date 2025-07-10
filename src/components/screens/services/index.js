import { Box, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './services.style';

const Services = () => {
const classes = useStyles();
  return (
   <Box className={classes.brandContainer}>
    <Box className={classes.brandBoxHeading}>
      <Typography variant="h4" gutterBottom className={classes.brandHeading}>
        Our Services
      </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
        {/* <Typography variant="h1" gutterBottom className={classes.brandHeading}>
            under process
            </Typography> */}
        <Typography variant="h2" gutterBottom className={classes.brandHeading}>
            We are working on our services page. Please check back later.
            </Typography>
        <Typography variant="h2" gutterBottom className={classes.brandHeading}> 

            Thank you for your patience!
            </Typography>

      </Box>
   </Box>
  )
}

export default Services