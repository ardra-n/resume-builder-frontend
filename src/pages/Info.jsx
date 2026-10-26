import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ResumeInput from '../components/ResumeInputs';
import Preview from '../components/Preview';
import React from 'react';

function Info() {
  const [resumeDetails,setResumeDetails] = React.useState({
      fullName:"",location:"",job:"",email:"",phone:"",linkedin:"",github:"",degree:"",college:"",year:"",skills:[],summary:""
    })
  return (
    <div>

      <Stack
        direction={{
          xs: 'column',
          sm: 'row'
        }}
        sx={{
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: '100px',
          marginBottom:'100px'
        }}
      >

        <Box>
          <ResumeInput resumeDetails={resumeDetails}
          setResumeDetails={setResumeDetails}/>

        </Box>

        <Box>
          <Preview resumeDetails=
          {resumeDetails}/>

        </Box>

      </Stack>

    </div>
  );
}

export default Info;