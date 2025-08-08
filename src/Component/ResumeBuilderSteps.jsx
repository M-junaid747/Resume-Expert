import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Upload Your Resume",
    description: "Start by uploading your resume in PDF or DOCX format for analysis.",
    color: "#e0f7fa",
    circleColor: "#4dd0e1",
  },
  {
    number: 2,
    title: "Input Job Description",
    description: "Paste or type the job description you're targeting for a detailed comparison.",
    color: "#f1f8e9",
    circleColor: "#aed581",
  },
  {
    number: 3,
    title: "AI Matching Analysis",
    description: "Our AI system matches your resume with the job and scores compatibility instantly.",
    color: "#fce4ec",
    circleColor: "#f06292",
  },
  {
    number: 4,
    title: "View Insights & Suggestions",
    description: "Get feedback on strengths, keyword gaps, and suggestions to improve your resume.",
    color: "#ede7f6",
    circleColor: "#9575cd",
  },
];

const ResumeMatchingSteps = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#fafafa",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      {/* Scroll-triggered animated heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#222",
            mb: 5,
          }}
        >
          How Resume Expert Matching Works
        </Typography>
      </motion.div>

      {/* Steps with re-activating animations */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={step.number}>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Box
                sx={{
                  backgroundColor: step.color,
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  height: "190px",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    backgroundColor: step.circleColor,
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: "18px",
                    mb: 2,
                  }}
                >
                  {step.number}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "#333",
                  }}
                >
                  {step.title}
                </Typography>
                <Typography sx={{ color: "#555", fontSize: "14px" }}>
                  {step.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ResumeMatchingSteps;