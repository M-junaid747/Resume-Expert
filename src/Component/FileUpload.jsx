import React, { useState } from "react";
import axios from "axios";
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

const ResumeUpload = ({ onEmailExtracted }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [resumeData, setResumeData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const MAX_SIZE_MB = 2;
    const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
    if (file) {
      const validFormats = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
      ];
      if (!validFormats.includes(file.type)) {
        setError("Invalid file format. Only PDF, DOCX, and TXT are allowed.");
        setSelectedFile(null);
        setSuccess(false);
      } else if (file.size > MAX_SIZE_BYTES) {
        setError(`File is too large. Maximum allowed size is ${MAX_SIZE_MB}MB.`);
        setSelectedFile(null);
      } else {
        setError("");
        setSelectedFile(file);
        setSuccess(false);
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/upload-resume/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
        }
      );

      if (response.status === 200) {
        setSuccess(true);
        setResumeData(response.data); // still storing for possible future use
        setSelectedFile(null);

        if (response.data.email) {
          localStorage.setItem("userEmail", response.data.email);    // Notify parent
        }
      } else {
        setError("Upload failed. Please try again.");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.detail) {
        setError(err.response.data.detail);
      } else {
        setError("Network error. Please try again later.");
      }
    }

    setUploading(false);
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
        {uploading && (
          <Box sx={{ marginTop: "10px" }}>
            <Typography variant="body2">Uploading: {uploadProgress}%</Typography>
            <Box
              sx={{
                width: '100%',
                height: 10,
                backgroundColor: '#e0e0e0',
                borderRadius: 5,
                overflow: 'hidden',
                marginTop: '5px'
              }}
            >
              <Box
                sx={{
                  width: `${uploadProgress}%`,
                  height: '100%',
                  backgroundColor: '#1976d2',
                }}
              />
            </Box>
          </Box>
        )}
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
