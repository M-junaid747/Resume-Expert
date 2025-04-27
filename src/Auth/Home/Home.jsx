import React from "react";
import { Box, Button, Typography, Grid, Container } from "@mui/material";
import Layout from "../../Layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          mt: 4,
          minHeight: "100vh",
          padding: "30px",
          backgroundImage:
            'url("https://media.istockphoto.com/id/1873788710/photo/magnifying-glass-focuses-on-percentage-symbol-on-blue-background-for-interest-rate-financial.jpg?s=612x612&w=0&k=20&c=l_ZF1UnBxWqylt70cJ2Wnhu3RrMVmrzhDwb4wglD3iw=")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mb: 4,
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              marginTop: "10 auto",
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
            }}
          >
            Resume and Job Description Matching
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              color: "#ddd",
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.25rem",
              lineHeight: 1.6,
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
            }}
          >
            Our advanced system uses text similarity algorithms, including cosine
            similarity and pre-trained models like BERT, to calculate compatibility scores for candidates.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
        >
          <Link to="/learnmore">
            <Button
              variant="contained"
              size="large"
              sx={{
                marginTop: "20px",
                textTransform: "none",
                padding: "12px 30px",
                backgroundColor: "#657C6A",
                "&:hover": {
                  backgroundColor: "F8F8E1",
                  transform: "scale(1.05)",
                  boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
      </Container>

      {/* Resume Upload Section */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          backgroundColor: "#f4f4f4",
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Start with Your Resume
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
          <Grid item xs={12} sm={8} sx={{ display: "flex", gap: 2 }}>
            <Link to="/file">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#948979",
                  color: "white",
                  padding: "12px 25px",
                  fontSize: "1.1rem",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#DFD0B8",
                    transform: "scale(1.05)",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
              >
                Analyse Resume
              </Button>
            </Link>
            <Link to="/job">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#222222",
                  color: "white",
                  padding: "12px 25px",
                  fontSize: "1.1rem",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#1E3E62",
                    transform: "scale(1.05)",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
              >
                Input Job Description
              </Button>
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
                How It Works
              </Typography>
              <Typography variant="body2" sx={{ color: "#555", marginBottom: "10px" }}>
                Upload your resume in PDF or DOCX format, and our system will analyze and match it with job descriptions.
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                Get insights on strengths, qualifications, and areas to improve.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Section 2 - Scroll Effect */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "30px",
          backgroundImage:
            'url("https://media.istockphoto.com/id/2112852994/photo/percentage-symbol-and-growth-arrow-interest-rates-continue-to-increase-stocks-and-mutual.jpg?s=612x612&w=0&k=20&c=y4ctwCgA4mO68738OG9lKKLKzF1M4-hJG9IHP0NN7so=")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          mb: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        >
          <Typography variant="h3" sx={{ color: "#fff", fontWeight: "bold", mb: 9 }}>
            AI-Powered Resume Analysis
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
        >
          <Typography variant="body1" sx={{ color: "#ddd", maxWidth: "700px" }}>
            Our system uses deep learning to analyze resumes and match them with job descriptions efficiently.
          </Typography>
        </motion.div>
      </Container>

      {/* Section 3 - Scroll Effect */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "30px",
          backgroundImage:
            'url("https://media.istockphoto.com/id/2162552790/photo/yellow-30-percentage-sign-with-soft-reflection-on-blue-soft-background.jpg?s=612x612&w=0&k=20&c=up2_8-VPagHSQiaOYH65hgGbf04tgix1GAs3Gz8nuH0=")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ color: "#fff", fontWeight: "bold", mb: 2 }}>
          Unlock Job Market Insights
        </Typography>
        <Typography variant="body1" sx={{ color: "#ddd", maxWidth: "700px" }}>
          Discover job trends, skill demands, and career pathways with our AI-driven insights.
        </Typography>
      </Container>
    </Layout>
  );
}
