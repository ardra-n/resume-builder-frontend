
import React from "react";
import { Box, Typography, Container, Grid, Stack } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Footer() {
  return (
    <Box className="footer">

      <Container maxWidth="xl">
        <Grid
  container
  spacing={4}
  className="footer-content"
  justifyContent="space-between"
>
  {/* Left Section */}
  <Grid item xs={12} md={7}>
    <Typography className="footer-title">
      AI rBuilder
    </Typography>

    <Typography className="footer-description">
      An AI rBuilder suggests job-specific keywords, professional
      summaries, and skill recommendations to make the resume more
      effective and ATS (Applicant Tracking System) friendly. The main
      goal of the AI Powered Resume Builder is to simplify the resume
      creation process and help job seekers build professional,
      well-structured resumes in a few minutes.
    </Typography>
  </Grid>

  {/* Right Section */}
  <Grid item xs={12} md={5} className="footer-right">
    <Typography className="footer-heading">
      Contact Us
    </Typography>

    <Stack spacing={2} className="contact-details">
      <Box className="contact-item">
        <EmailOutlinedIcon />
        <Typography>resumebuilder@gmail.com</Typography>
      </Box>

      <Box className="contact-item">
        <PhoneOutlinedIcon />
        <Typography>9087654321</Typography>
      </Box>
    </Stack>

    <Typography className="footer-heading connect-heading">
      Connect With Us
    </Typography>

    <Stack direction="row" spacing={2} className="social-icons">
      <InstagramIcon />
      <FacebookIcon />
      <WhatsAppIcon />
    </Stack>
  </Grid>
</Grid>

        
        

      </Container>
    </Box>
  );
}

export default Footer;
