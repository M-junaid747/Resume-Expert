import React from "react";
import { Box, Button, Typography, Grid, Container } from "@mui/material";
import Appbar from "../../Component/Appbar";
import ResumeUpload from "../../Component/FileUpload";
import Layout from "../../Layout/Layout";
import { motion } from "framer-motion";
import Counter from "./Counter";

export default function Home() {
  return (
    <>
      <Layout>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            background: "linear-gradient(to bottom, #f7f8fa, #ffffff)",
            padding: "40px",
          }}
        >
          {/* Hero Section */}
          <Box
            sx={{
              textAlign: "center",
              marginBottom: "40px",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 3,
                ease: "easeOut",
                delay: 0.8, // Optional delay for a staggered effect
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "#333",
                  textAlign: "center", // Align to center for balance
                  margin: "0 auto", // Center horizontally
                }}
              >
                Resume and Job Description Matching
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  color: "#555",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                Our advanced system uses text similarity algorithms, including
                cosine similarity and pre-trained models like BERT, to calculate
                compatibility scores for candidates. Find out how well a
                candidate aligns with specific job roles.
              </Typography>
            </motion.div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                marginTop: "20px",
                textTransform: "none",
                padding: "10px 20px",
              }}
            >
              Learn More
            </Button>
          </Box>

          {/* Resume Upload Section */}
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="flex-start"
            sx={{ maxWidth: "1000px", margin: "0 auto" }}
          >
            <Grid item xs={12} sm={8}>
              <ResumeUpload />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  How It Works
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", marginBottom: "10px" }}
                >
                  Upload your resume in PDF or DOCX format, and our system will
                  analyze and match it with job descriptions.
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  Get insights on strengths, qualifications, and areas to
                  improve.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Footer */}
        <Box
          sx={{
            backgroundColor: "#333",
            color: "#fff",
            textAlign: "center",
            padding: "10px 20px",
            marginTop: "40px",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} YourCompanyName. All rights reserved.
          </Typography>
        </Box>
        <Box>
          <Counter/>
        </Box>
      </Layout>
    </>
  );
}
