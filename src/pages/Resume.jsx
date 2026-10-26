import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import DescriptionIcon from "@mui/icons-material/Description";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";

function Resume() {
  return (
    



      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 5,
            md: 7,
          },
        }}
      >

        {/* TITLE */}

        <Typography
          align="center"
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: {
              xs: "32px",
              md: "52px",
            },
            fontWeight: "bold",
            color: "#25282b",
            mb: 7,
          }}
        >
          Create an ATS Friendly Resume in Minutes with AI
        </Typography>


        {/* ================= CARDS ================= */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 5,

            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >

          {/* CARD 1 */}

          <Card
            sx={{
              width: {
                xs: "100%",
                md: "48%",
              },

              height: 385,

              borderRadius: "8px",

              boxShadow:
                "0px 8px 20px rgba(0,0,0,0.12)",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            <CardContent
              sx={{
                textAlign: "center",
                width: "100%",
              }}
            >

              {/* ICON */}

              <DescriptionIcon
              />


              {/* TITLE */}

              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: {
                    xs: "25px",
                    md: "32px",
                  },
                  fontWeight: "bold",
                  color: "#182a3d",
                  mb: 1,
                }}
              >
                Add Your Details
              </Typography>


              {/* DESCRIPTION */}

              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: "21px",
                  lineHeight: 1.5,
                  color: "#111",
                  maxWidth: 400,
                  margin: "0 auto",
                  mb: 2,
                }}
              >
                Our AI will generate Skills & Summary
              </Typography>


              {/* STEP */}

              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#182a3d",
                }}
              >
                Step 1
              </Typography>

            </CardContent>

          </Card>


          {/* CARD 2 */}

          <Card
            sx={{
              width: {
                xs: "100%",
                md: "48%",
              },

              height: 385,

              borderRadius: "8px",

              boxShadow:
                "0px 8px 20px rgba(0,0,0,0.12)",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            <CardContent
              sx={{
                textAlign: "center",
                width: "100%",
              }}
            >

              {/* ICON */}

              <DownloadIcon
                
              />


              {/* TITLE */}

              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: {
                    xs: "25px",
                    md: "32px",
                  },
                  fontWeight: "bold",
                  color: "#182a3d",
                  mb: 1,
                }}
              >
                Download your Resume
              </Typography>


              {/* DESCRIPTION */}

              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: "21px",
                  lineHeight: 1.5,
                  color: "#111",
                  maxWidth: 400,
                  margin: "0 auto",
                  mb: 2,
                }}
              >
                Download CV as PDF and start applying
              </Typography>


              {/* STEP */}

              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#182a3d",
                }}
              >
                Step 2
              </Typography>

            </CardContent>

          </Card>

        </Box>


        

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 7,
          }}
        >

          <Link to={'/resume-details'}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#805333",
              color: "#fff",

              fontFamily: "Georgia, serif",

              fontSize: "18px",
              fontWeight: "bold",

              textTransform: "uppercase",

              borderRadius: "8px",

              px: 2.5,
              py: 1.2,

              "&:hover": {
                backgroundColor: "#684329",
              },
            }}
          >
            LET'S START
          </Button></Link>

        </Box>

      </Container>

    
  );
}

export default Resume;
