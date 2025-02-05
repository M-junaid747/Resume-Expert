import {
  Box,
  Grid2,
  Typography,
  TextField,
  Button,
  Card,
  Alert,
} from "@mui/material";
import { useState } from "react";
import react from "react";
import { signUp } from "../api/auth";
import CustomAleart from "../Component/Aleart";
import { Link } from "react-router-dom";

export default function Signup() {


  const [signUpData, setSignUpData] = useState({});   
   console.log(signUpData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signUp(signUpData);
  };
  return (
    <>
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}
      >
        <Card
          elevation={6}
          sx={{
            padding: "40px",
            maxWidth: "400px",
            width: "100%",
            borderRadius: "30px",
            background: 'linear-gradient(45deg, #2196F3,rgb(157, 200, 210))',
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Add transition for smooth animation
            "&:hover": {
              transform: "scale(1.05)", // Scale up the card on hover
              boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)", // Add shadow on hover
            },
          }}
        >
          <Box
            alignContent={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Typography variant="h4" gutterBottom>
              Sign Up
            </Typography>
            <Typography variant="h6" gutterBottom>
              Create a new account
            </Typography>
          </Box>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Box mb={2}>
              <TextField
                variant="outlined"
                label="username"
                value={signUpData.username}
                fullWidth
                onChange={(e) =>
                  setSignUpData({ ...signUpData, username: e.target.value })//{e:{target:{value:"fahad"}}}
                }
                type="text"
              />
            </Box>
            <Box mb={2}>
              <TextField
                variant="outlined"
                label="email"
                fullWidth
                value={signUpData.email}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, email: e.target.value })
                }
                type="email"
              />
            </Box>
            <Box mb={2}>
              <TextField
                variant="outlined"
                label="password"
                fullWidth
                value={signUpData.password}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
                type="password"
              />
            </Box>
            <Box mb={2}>
              <Link to="/signin">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Sign Up
                </Button>
              </Link>
            </Box>
            <Typography variant="body2" color="textSecondary" align="center">
              Don’t have an account?{" "}
              <Link to="/signin">
                <Button
                  color="secondary"
                  style={{
                    textTransform: "none",
                    padding: 0,
                    fontSize: "inherit",
                  }}
                >
                  Sign In
                </Button>
              </Link>
            </Typography>
          </form>
        </Card>
      </Grid2>
      <Box>
        <CustomAleart message={"user signup successfully"} />
      </Box>
    </>
  );
}
