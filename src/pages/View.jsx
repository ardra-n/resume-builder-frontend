import React, { useState } from 'react'
import {
  Typography,
  Paper,
  Button,
  Box
} from '@mui/material'
import { useParams } from 'react-router-dom'
import  Edit  from "../components/Edit";
import { downloadResumeAPI, uploadCloudinary, viewResumeApi } from '../services/apiServices';
import { useEffect } from 'react';
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
function View() {
  const {id}=useParams()
  console.log(id);

  const viewResume=async()=>{
 const response=await viewResumeApi(id)
 console.log(response);
 setResume(response.data)

  }
 
  
  useEffect(()=>{
    viewResume()
  },[])
  
  // Resume data
  const [resume, setResume] = useState({

  })

  // Modal state
  const [open, setOpen] = useState(false)

  const handleEdit = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const downloadPdf=async()=>{
    console.log(document.getElementById('result'));
    let canvas=await html2canvas(document.getElementById('result'),{scale:3})
    console.log(canvas);
    let imageUrl =canvas.toDataURL('image/png')
    console.log(imageUrl);

    const pdf =new jsPDF('p','mm','a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth)/canvas.width
    pdf.addImage(imageUrl,'PNG',0,0,pdfWidth,pdfHeight)
    pdf.save('resume.pdf')

    const timeZone = new Date()
    console.log(timeZone);
    const formatedDate=`${timeZone.toLocaleDateString()},${timeZone.toLocaleTimeString()}`
    console.log(formatedDate);

    const cloudinaryResponse=await uploadCloudinary(imageUrl)
    console.log(`cloudinaryResponse:${cloudinaryResponse}`);
    
    
    const response=await downloadResumeAPI({...resume,imageUrl,id:formatedDate,resumeId:resume.id})
    console.log(response);
    
    
    


  }

  // Receive updated resume data from Edit component
  const handleSave = (updatedData) => {
    setResume(updatedData)
    setOpen(false)
  }

  return (
       <div>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}}>
        <Button variant='text' onClick={downloadPdf}>Download Cv</Button>
    
        <Edit resume={resume} setResume={setResume} />
       


        <Button variant='text'>Home</Button>
      </Box>

      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Paper id="result" elevation={24} sx={{padding:"30px",width:"600px",}}>
        <Box>
        <Typography variant='h3'>{resume?.fullName?resume.fullName:"Name"}</Typography>
      <Typography variant='body1'>{resume?.phone?resume.phone:"phone"}</Typography>
      <Typography variant='body1'>{resume?.email?resume.email:"Email"}</Typography>
      <Typography variant='body1'>{resume?.linkedin?resume.linkedin:"linkedin"}</Typography>
      <Typography variant='body1'>{resume?.github?resume.github:"Github"}</Typography>
      <Typography variant='body1'>{resume?.location?resume.location:"location"}</Typography>

      </Box>
      <hr />
      <Typography variant='h3'>
       Professional Summary
      </Typography>
      <Typography variant='body1'>
 {resume?.summary?resume.summary:"Professional Summary"}       </Typography>
      <hr />
      <Typography variant='h3'>
        Technical Skills 
      </Typography>
      <Typography variant='body1'>
{resume?.skills?resume.skills:"Skills"}      </Typography>
      <hr />
      <Typography variant='h3'>
       Education
      </Typography>
      <Typography variant='body1'> {resume?.degree?resume.degree:"Degree"}</Typography>
      <Typography variant='body1'> {resume?.college?resume.colllege:"College"}</Typography>
      <Typography variant='body1'> {resume?.year?resume.year:"Year"}</Typography>
      </Paper>
      </Box> 
    </div>
  );
}



export default View