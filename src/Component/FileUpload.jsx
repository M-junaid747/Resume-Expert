import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  CircularProgress,
  Alert,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const ResumeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleFileChange = (event) => {
    console.log("event",event)
    const file = event.target.files[0];
    // console.log("filr type",file.type)
    if (file) {
      const validFormats = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document","text/plain",
      ];
      if (!validFormats.includes(file.type)) {
        setError("Invalid file format. Only PDF and DOCX are allowed.");
        setSelectedFile(null);
        setSuccess(false);
      } else {
        setError("");
        setSelectedFile(file);
        setSuccess(false);
      }
    }
  };
  console.log(selectedFile);
  const handleUpload = () => {
    if (!selectedFile) return;

    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setSuccess(true);
      setSelectedFile(null);
    }, 2000); // Simulate upload delay
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Upload Your Resume
      </Typography>
      <Box sx={{ margin: "20px 0" }}>
        <Button
          variant="outlined"
          component="label"
          startIcon={<UploadFileIcon />}
          sx={{ marginBottom: "10px" }}
        >
          Select File
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            hidden
            onChange={handleFileChange}
          />
        </Button>
        {selectedFile && (
          <Typography variant="body1" sx={{ marginTop: "10px" }}>
            Selected File: {selectedFile?.name}
          </Typography>
        )}
      </Box>
      {error && (
        <Alert severity="error" sx={{ marginBottom: "10px" }}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ marginBottom: "10px" }}>
          Upload successful!
        </Alert>
      )}

      <Box sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={
            uploading ? <CircularProgress size={20} /> : <CloudUploadIcon />
          }
          onClick={handleUpload}
          disabled={!selectedFile || uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </Button>
        {success && (
          <IconButton color="success" sx={{ marginLeft: "10px" }}>
            <CheckCircleOutlineIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default ResumeUpload;
