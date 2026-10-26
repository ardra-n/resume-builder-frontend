import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRoles from '../assets/jobRoles.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import { addResumeAPI } from '../services/apiServices';
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'


const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Review & Submit'];

function ResumeInputs({ resumeDetails, setResumeDetails }) {
  const navigate= useNavigate()

  console.log(resumeDetails);

  const [activeStep, setActiveStep] = React.useState(0);

  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = React.useCallback((step) => {
    return step === 1;
  }, []);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  
  const previousActiveStepRef = React.useRef(activeStep);
  const resetButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  // Manage focus when the active step changes.
  React.useEffect(() => {
    const previousActiveStep = previousActiveStepRef.current;
    previousActiveStepRef.current = activeStep;

    if (activeStep === steps.length) {
      // If the user has completed all steps and hits "Finish", focus the "Reset" button.
      resetButtonRef.current.focus();
      return;
    }
    if (activeStep === 0 && previousActiveStep === steps.length) {
      // If the user has completed all steps and hits "Reset", focus the "Next" button.
      nextButtonRef.current.focus();
      return;
    }
    if (isStepOptional(previousActiveStep) && !isStepOptional(activeStep)) {
      // If the user hits "Skip" and the next step is not optional, focus the "Next" button.
      nextButtonRef.current.focus();
    }
  }, [activeStep, isStepOptional]);

  const renderFormContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h1>Personal Details</h1>
          <Stack>
            <br />
            <TextField id="standard-basic" label="FullName" variant="standard" value={resumeDetails.fullName} onChange={(e) => setResumeDetails({ ...resumeDetails, fullName: e.target.value })} /><br />
            <TextField id="standard-basic" label="Location" variant="standard" onChange={(e) => setResumeDetails({ ...resumeDetails, location: e.target.value })} /><br />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={resumeDetails.job}
                label="Choose Job Title"
                onChange={(e) => setResumeDetails({ ...resumeDetails, job: e.target.value })}
              // onChange={handleChange}
              >
                {
                  jobRoles.jobRoles.map(item => (
                    <MenuItem value={item}>{item}</MenuItem>

                  ))
                }
              </Select>

            </FormControl>
          </Stack>
        </div>
      )

      case 1: return (
        <div>
          <h1>Contact Details</h1>
          <Stack>
            <br />
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setResumeDetails({ ...resumeDetails, email: e.target.value })} /><br />
            <TextField id="standard-basic" label="Contact Number" variant="standard" onChange={(e) => setResumeDetails({ ...resumeDetails, phone: e.target.value })} /><br />
            <TextField id="standard-basic" label="Linkedin Link" variant="standard" onChange={(e) => setResumeDetails({ ...resumeDetails, linkedin: e.target.value })} /><br />
            <TextField id="standard-basic" label="Github Link" variant="standard" onChange={(e) => setResumeDetails({ ...resumeDetails, github: e.target.value })} /><br />
          </Stack>
        </div>
      )

      case 2: return (
        <div>
          <h1>Educational Details</h1>
          <Stack>
            <br />
            <TextField id="standard-basic" label="Bachelor's Degree" variant="standard" onChange={(e) => setResumeDetails({ ...resumeDetails, degree: e.target.value })} /><br />
            <TextField id="standard-basic" label="College/University Name" variant="standard" onChange={(e) => setResumeDetails({ ...resumeDetails, college: e.target.value })} /><br />
            <TextField id="standard-basic" label="Year of Graduation" variant="standard" onChange={(e) => setResumeDetails({ ...resumeDetails, year: e.target.value })} /><br />
          </Stack>
        </div>
      )

      case 3: return (
        <div>
          <br />
          <Stack>
            Our AI will generate Skills & Summary according to your job role.<br />Once the form get submitted,user won't get the chance to update the resume details.<br />If you want to proceed please click the Generate AI Skill & Summary botton to submit.
          </Stack>
        </div>
      )
      default: return null

    }

  }
  const handleGenerateSummary = () => {
    handleNext()
    setResumeDetails({ ...resumeDetails, skills: jobSkills[resumeDetails.job], summary: summaries[resumeDetails.job] })
  }

  const handleSubmit =async()=> {
    const response = await addResumeAPI(resumeDetails)
    console.log(response);
    const resumeId=response.data.id
    console.log(`resume id ${resumeId}`);
    
    
    if(response.status==201){
      Swal.fire({
  title: "Good job!",
  text: "Resume added successfully!",
  icon: "success"
});
 
//redirected to view of the particular resume
 setTimeout(()=>{
  navigate(`/resumes/${resumeId}`)
 },3000)
    }
    
}


  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleSubmit} ref={resetButtonRef}>
              Finish
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            Contents
            {
              renderFormContent(activeStep)
            }

          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
            <div ref={nextButtonRef}>
              {activeStep === steps.length - 1 ?
                //'Finish' 
                <Button onClick={handleGenerateSummary}>Generate AI Skills and Summary</Button>
                :
                //'Next'
                <Button onClick={handleNext}>Next</Button>
              }
            </div>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default ResumeInputs
