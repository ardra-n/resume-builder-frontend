
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


import { styled } from '@mui/material/styles';
import { deleteSavedAPI, viewAllResumesAPI } from '../services/apiServices';
import { useMemo } from 'react';





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function Saved() {
  const [searchKey,setSearchkey]=useState('');


  const [resumes,setResumes]=useState([])
  const [dummyResume,setDummyResume]=useState([]);

  const searchOutput=useMemo(()=>{
    setResumes(dummyResume.filter(item =>item.job.includes(searchKey)))
  },[searchKey])


  const getAllResumes=async()=>{
    try{
      const response=await viewAllResumesAPI()
      console.log(response);
      setResumes(response.data)
      setDummyResume(response.data)
      

    }
    catch(error){
      console.log(error);
      
    }

  }
useEffect(()=>{
  getAllResumes()

},[])

const deleteResume=async(id)=>{
  try{
    const response=await deleteSavedAPI(id)
    console.log(response);
    getAllResumes()
    
  }
  catch(error){
    console.log(error);
    
  }
}
  return (
    <Container
        maxWidth="lg"
        sx={{
          py: 2,
        }}
      >
        

       
        <Typography
          align="center"
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: {
              xs: "40px",
              md: "56px",
            },
            fontWeight: "bold",
            color: "#25282b",
            mb: 3,
          }}
        >
          All Saved Resumes
        </Typography>
        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: {
              xs: "17px",
              md: "21px",
            },
            lineHeight: 1.2,
            color: "#111",
            mb: 3,
          }}
        >
          All resumes submitted to the platform in one place, allowing
          administrators or recruiters to efficiently view, search, filter,
          and manage candidate profiles. It provides a quick overview of
          available candidates and their key details, making the recruitment
          and candidate-selection process more organized and efficient.
        </Typography>
     <Box sx={{ display: "flex", justifyContent: "center" }}>
      <OutlinedInput 
      onChange={(e)=>setSearchkey(e.target.value)}
      placeholder='Search Candidates By Their Job Role'
       sx={{width:350, }} 
          endAdornment={<SearchIcon />}
/>

      </Box> 
      <br />


       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700,}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">JOB ROLE</StyledTableCell>
            <StyledTableCell align="right">ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {resumes.map((item,index) => (
            <StyledTableRow key={item.id}>
               <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
               <Link to={`/resumes/${item.id}`}> {item.fullName}</Link>
              </StyledTableCell>
              <StyledTableCell align="right">{item.job}</StyledTableCell>
              <StyledTableCell align="right"><Button  variant="contained"
           color="error" onClick={()=>deleteResume(item.id)}>Delete</Button></StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</Container>


  )
}

export default Saved
