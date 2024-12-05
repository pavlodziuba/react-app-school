import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  TextareaAutosize,
  Snackbar, // Import Snackbar for the popup message
  Alert, // Import Alert to show the success message
} from "@mui/material";
import "./RegistrationFormOnProgram.css";

const RegistrationForm = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    username: "",
    surname: "",
    email: "",
    message: "",
  });

  // State for Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission logic here
    console.log("Form data submitted:", formData);

    // Show success message via Snackbar
    setOpenSnackbar(true);
  };

  // Close Snackbar after some time
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="registration-program">
      <Box sx={{ maxWidth: 400, margin: "auto", padding: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Registrácia do programu
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <p>Meno</p>
          <TextField
            label=""
            variant="outlined"
            fullWidth
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            sx={{ marginBottom: 2 }}
          />

          {/* Surname Input */}
          <p>Priezvisko</p>
          <TextField
            label=""
            variant="outlined"
            type="text"
            fullWidth
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            sx={{ marginBottom: 2 }}
          />

          {/* Email Input */}
          <p>Email</p>
          <TextField
            label=""
            variant="outlined"
            type="email"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ marginBottom: 2 }}
          />

          {/* Message Textarea */}
          <p>Správa</p>
          <TextareaAutosize
            minRows={7}
            required
            sx={{ marginBottom: 2 }}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              resize: "none",
              border: "1px solid #ccc",
            }}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <div className="send-button">
            <Button type="submit" variant="contained" fullWidth>
              Poslať
            </Button>
          </div>
        </form>
      </Box>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "top", // Vertical positioning (centered vertically)
          horizontal: "center", // Horizontal positioning (centered horizontally)
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{
            width: "100%",
            fontSize: "1.2rem", // Increased font size
            padding: "20px", // Increased padding
            backgroundColor: "#4caf50", // Green background for success
            color: "#fff", // White text color
          }}
        >
          Formulár bol úspešne odoslaný
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RegistrationForm;
