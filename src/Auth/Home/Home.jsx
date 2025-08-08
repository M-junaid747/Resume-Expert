import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import Layout from "../../Layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResumeBuilderSteps from "../../Component/ResumeBuilderSteps";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 1, md: 4 }, // Reduced top margin on mobile
          minHeight: { xs: "50vh", md: "100vh" }, // Reduced height on mobile
          padding: { xs: "10px", md: "30px" }, // Reduced padding on mobile
          backgroundImage:
            'url("https://media.istockphoto.com/id/1873788710/photo/magnifying-glass-focuses-on-percentage-symbol-on-blue-background-for-interest-rate-financial.jpg?s=612x612&w=0&k=20&c=l_ZF1UnBxWqylt70cJ2Wnhu3RrMVmrzhDwb4wglD3iw=")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mb: { xs: 1, md: 2 }, // Reduced bottom margin
          position: "relative",
          animation: "gentleZoom 7s ease-in-out infinite",
          '@keyframes gentleZoom': {
            '0%': { backgroundSize: '100%' },
            '50%': { backgroundSize: '105%' },
            '100%': { backgroundSize: '100%' },
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        >
          <Typography
             variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "black",
              // border: "2px solid white",
              padding: "10px",
              textAlign: "center",
              marginTop: "4 auto",
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
            }}
          >
            Resume and Job Description Matching
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              color: "#000000",
              maxWidth: { xs: "85%", sm: "90%", md: "700px" }, // Adjusted for better fit
              margin: "0 auto",
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" }, // Refined font size
              lineHeight: 1.6,
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
            }}
          >
            Our advanced system uses pre trianed AI model to calculate compatibility scores of Resumes against job descriptions to help job seekers.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
        >
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                const resumeSection = document.getElementById("resume-section");
                resumeSection && resumeSection.scrollIntoView({ behavior: "smooth" });
              }}
              sx={{
                marginTop: { xs: "10px", md: "20px" }, // Reduced margin on mobile
                textTransform: "none",
                padding: { xs: "6px 16px", md: "12px 30px" }, // Smaller button on mobile
                fontSize: { xs: "0.75rem", md: "1rem" }, // Smaller font on mobile
                backgroundColor: "#657C6A",
                "&:hover": {
                  backgroundColor: "#A2B9A7",
                  transform: "scale(1.05)",
                  boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              GetStarted
            </Button>
          
        </motion.div>
      </Container>

      {/* Resume Upload Section with animated background */}
      <Container
      id="resume-section"
        sx={{
          py: { xs: 2, md: 8 }, // Reduced padding on mobile
          backgroundImage: `url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          animation: "backgroundSway 20s infinite ease-in-out",
          '@keyframes backgroundSway': {
            '0%': { backgroundPosition: 'left center' },
            '50%': { backgroundPosition: 'right center' },
            '100%': { backgroundPosition: 'left center' },
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9))',
            zIndex: 1,
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#1E3A8A",
              textAlign: "center",
              mb: { xs: 1, md: 4 }, // Reduced margin on mobile
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Start with Your Resume
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={{ xs: 2, md: 6 }}
          justifyContent="center"
          alignItems="stretch"
          sx={{ position: 'relative', zIndex: 2 }}
        >
          <Grid item xs={12} md={5}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                  p: { xs: 1, md: 2 },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#0D47A1",
                      mb: { xs: 1, md: 2 },
                      fontSize: { xs: "1rem", md: "1.25rem" },
                    }}
                  >
                    Upload and Analyze Your Resume
                  </Typography>
                  <Typography sx={{ mb: { xs: 1, md: 3 } }}>
                    Upload your resume and get instant feedback on job alignment, skills match, and suggestions for improvement.
                  </Typography>
                  <Button
                    component={Link}
                    to="/file"
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#1E88E5",
                      color: "#fff",
                      fontWeight: "bold",
                      borderRadius: "10px",
                      textTransform: "none",
                      padding: { xs: "6px 12px", md: "8px 16px" },
                      fontSize: { xs: "0.875rem", md: "1rem" },
                      "&:hover": {
                        backgroundColor: "#1565C0",
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    Analyze Resume
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  background: "linear-gradient(to bottom, #ede7f6, #ffffff)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                  p: { xs: 1, md: 2 },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#6A1B9A",
                      mb: { xs: 1, md: 2 },
                      fontSize: { xs: "1rem", md: "1.25rem" },
                    }}
                  >
                    Search Matching Resumes
                  </Typography>
                  <Typography sx={{ mb: { xs: 1, md: 3 } }}>
                    Enter a job description and let our AI match it against existing resumes based on skills, experience, and relevance.
                  </Typography>
                  <Button
                    component={Link}
                    to="/job"
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#8E24AA",
                      color: "#fff",
                      fontWeight: "bold",
                      borderRadius: "10px",
                      textTransform: "none",
                      padding: { xs: "6px 12px", md: "8px 16px" },
                      fontSize: { xs: "0.875rem", md: "1rem" },
                      "&:hover": {
                        backgroundColor: "#6A1B9A",
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    Search Resumes
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { xs: "50vh", md: "100vh" }, // Reduced height on mobile
          padding: { xs: "10px", md: "30px" }, // Reduced padding on mobile
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2)), url("https://media.istockphoto.com/id/2112852994/photo/percentage-symbol-and-growth-arrow-interest-rates-continue-to-increase-stocks-and-mutual.jpg?s=612x612&w=0&k=20&c=y4ctwCgA4mO68738OG9lKKLKzF1M4-hJG9IHP0NN7so=")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          mb: { xs: 1, md: 2 }, // Reduced bottom margin
          position: "relative",
          filter: 'brightness(1.05)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          },
          animation: "gentleZoom 10s ease-in-out infinite",
          '@keyframes gentleZoom': {
            '0%': { backgroundSize: '100%' },
            '50%': { backgroundSize: '105%' },
            '100%': { backgroundSize: '100%' },
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              mb: { xs: 2, md: 9 }, // Reduced margin on mobile
              textShadow: "1px 1px 6px rgba(0, 0, 0, 0.5)",
              fontSize: { xs: "1.25rem", md: "2.5rem" },
            }}
          >
            AI-Powered Resume Analysis
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.6 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#000000",
              fontWeight: "bold",
              mb: { xs: 2, md: 9 }, // Reduced margin on mobile
              maxWidth: { xs: "85%", md: "700px" },
              textShadow: "1px 1px 3px rgba(255, 255, 255, 0.5)",
              fontSize: { xs: "0.75rem", md: "1rem" },
            }}
          >
            Our system uses the power of Artificial Intelligence to analyze resumes and match them with job descriptions efficiently.
          </Typography>
        </motion.div>
      </Container>

      {/* Resume Builder Steps */}
      <ResumeBuilderSteps />
    </Layout>
  );
}