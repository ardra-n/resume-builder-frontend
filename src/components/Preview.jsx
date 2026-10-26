import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

function Preview({resumeDetails}) {
  return (
    <Box
       sx={{
          width: 500,
         height: 500,
        
      }}
    >
      
      <Paper elevation={12} />
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontSize: '30px',
          marginBottom: '2px'
        }}
      >
        {resumeDetails.fullName?resumeDetails.fullName:"Full Name"}
      </Typography>

      {/* Contact Details */}
      <Typography sx={{ fontSize: '17px', marginBottom: '8px' }}>
        Phone: {resumeDetails.phone?resumeDetails.phone:"9843562789"}
      </Typography>

      <Typography sx={{ fontSize: '17px', marginBottom: '8px' }}>
        Email: {resumeDetails.email?resumeDetails.email:"name@gmail.com"}
      </Typography>

      <Typography sx={{ fontSize: '17px', marginBottom: '8px' }}>
        Linkedin: {resumeDetails.linkedin?resumeDetails.linkedin:"Linkedin"}
      </Typography>

      <Typography sx={{ fontSize: '17px', marginBottom: '8px' }}>
        Github: {resumeDetails.github?resumeDetails.github:"Github"}
      </Typography>

      <Typography sx={{ fontSize: '17px', marginBottom: '14px' }}>
        Location: {resumeDetails.location?resumeDetails.location:"Thrissur"}
      </Typography>

      

      {/* Professional Summary */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          fontSize: '25px',
          marginTop: '14px',
          marginBottom: '8px'
        }}
      >
        Professional Summary
      </Typography>

      <Typography
        sx={{
          fontSize: '17px',
          lineHeight: 1.45,
          maxWidth: '650px',
          marginBottom: '14px'
        }}
      >
       {resumeDetails.summary?resumeDetails.summary:""}
      </Typography>

      
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          fontSize: '25px',
          marginTop: '14px',
          marginBottom: '8px'
        }}
      >
        Technical Skills
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px 30px',
          padding: '10px 12px',
          maxWidth: '650px'
        }}
      >
        {resumeDetails.skills.map(item=>(
          <button>{item}</button>
        ))}
       
      </Box>

      <Divider />

      
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          fontSize: '25px',
          marginTop: '14px',
          marginBottom: '8px'
        }}
      >
        Education
      </Typography>

      <Typography sx={{ fontSize: '17px', marginBottom: '8px' }}>
        Bachelor’s Degree: {resumeDetails.degree?resumeDetails.degree:"Qualification"}
      </Typography>

      <Typography sx={{ fontSize: '17px', marginBottom: '8px' }}>
        University/College Name : {resumeDetails.college?resumeDetails.college:""}
      </Typography>

      <Typography sx={{ fontSize: '17px' }}>
        Year of Graduation : {resumeDetails.year?resumeDetails.year:""}
      </Typography>
    </Box>
      

   
  )
}

export default Preview
