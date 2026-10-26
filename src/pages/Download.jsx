import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import { viewDownloadsAPI,deleteDownloadsAPI } from '../services/apiServices';
import { Pie, PieChart, Tooltip } from 'recharts';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Download({ isAnimationActive = true }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allDownloads,setAllDownloads]=useState([])


//view all downloads
  const getDownloads=async()=>{
    const response = await viewDownloadsAPI()
    console.log(response);

    setAllDownloads(response.data)
    

  }
  useEffect(()=>{
    getDownloads()

  },[])

  const deleteDownloads=async(id)=>{
    try{
      const response=await deleteDownloadsAPI(id)
      console.log(response);
      getDownloads()
      

    }
    catch(err){
      console.log(err);
      

    }
  }
 

  return (
    <Container maxWidth="lg">

  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mt: 7,
      mb: 5,
    }}
  >

    <Typography
      sx={{
        fontFamily: 'Georgia, serif',
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#20252a',
      }}
    >
      All Downloaded Resume Details
    </Typography>

    <Button onClick={handleOpen}
      variant="contained"
      sx={{
        backgroundColor: '#805333',
        fontFamily: 'Georgia, serif',
        fontSize: '18px',
        fontWeight: 'bold',
        textTransform: 'none',
        borderRadius: '8px',
        px: 2.5,
        py: 1.3,

        '&:hover': {
          backgroundColor: '#805333',
        },
      }}
    >
      View in Chart
    </Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PieChart width={400} height={400}>
      <Pie
        activeShape={{
          fill: 'red',
        }}
        data={[
          { name: 'Page A', uv: 590 },
          { name: 'Page B', uv: 590 },
          { name: 'Page C', uv: 868 },
        ]}
        dataKey="uv"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip defaultIndex={2} />
      {/* <RechartsDevtools /> */}
    </PieChart>
        </Box>
      </Modal>

  </Box>
  <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,
          ml:10,
          mt:5,
          mb:5
        },
      }}

      
    >
      {
        allDownloads.length>0?allDownloads.map(item=>(
         <div key={item.id}>
           <p>Downloaded Date:{item.formatedDate}</p>
           <br />
           <Button
            variant="contained"
           color="error"
            onClick={()=>deleteDownloads(item.id)}>Delete</Button>
          <Paper elevation={3}>
           <img src={item.imageUrl}  width={'350px'} alt="" />
          </Paper>
         </div>
        ))
        :"no data"
      }
       

     
      
    </Box>

</Container>


    
  )
}

export default Download
