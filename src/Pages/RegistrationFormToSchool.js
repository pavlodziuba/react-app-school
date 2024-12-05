import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  TextareaAutosize,
  Snackbar, // Import Snackbar for the popup message
  Alert, // Import Alert to show the success message
} from "@mui/material";
import "./RegistrationFormToSchool.css";

const RegistrationFormToSchool = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    username: "",
    surname: "",
    email: "",
    message: "",
  });

  // State for Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [files, setFiles] = useState([]);

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // Add new files to the state
  };

  // Handle file deletion
  const handleFileDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // Remove file at the given index
  };

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
    setFormData({
      username: "",
      surname: "",
      email: "",
      message: "",
    });
    setFiles([]);
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
          {/* Display Uploaded Files with Delete Option */}
          {files.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <h4>Vybrané súbory:</h4>
              <ul className="file-list">
                {files.map((file, index) => (
                  <li key={index}>
                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                    {/* Delete Button */}
                    <button
                      onClick={() => handleFileDelete(index)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "red",
                        fontSize: "36px",
                        marginLeft: "5px",
                        cursor: "pointer",
                        padding: "0",
                        lineHeight: "0", // This removes any space around the icon
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      &times; {/* Unicode character for '×' (cross symbol) */}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            {/* Hidden File Input */}
            <input
              style={{ display: "none" }}
              id="file-upload"
              type="file"
              multiple // Allows multiple file uploads
              onChange={handleFileChange}
            />
            {/* Button */}
            <label htmlFor="file-upload" className="add-files-button">
              <Button
                variant="contained"
                component="span"
                fullWidth
                sx={{ marginBottom: 2 }}
              >
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7929 7.36665L7.66621 13.4933C6.91565 14.2439 5.89766 14.6655 4.83621 14.6655C3.77475 14.6655 2.75677 14.2439 2.00621 13.4933C1.25565 12.7428 0.833984 11.7248 0.833984 10.6633C0.833984 9.60186 1.25565 8.58388 2.00621 7.83332L8.13287 1.70665C8.63325 1.20628 9.3119 0.925171 10.0195 0.925171C10.7272 0.925171 11.4058 1.20628 11.9062 1.70665C12.4066 2.20703 12.6877 2.88568 12.6877 3.59332C12.6877 4.30096 12.4066 4.97961 11.9062 5.47999L5.77287 11.6067C5.52269 11.8568 5.18336 11.9974 4.82954 11.9974C4.47572 11.9974 4.1364 11.8568 3.88621 11.6067C3.63602 11.3565 3.49547 11.0171 3.49547 10.6633C3.49547 10.3095 3.63602 9.97017 3.88621 9.71999L9.54621 4.06665"
                    stroke="#1E1E1E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p style={{ marginLeft: "10px" }}>Priložiť súbory</p>
              </Button>
            </label>
          </div>
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
          Formulár na Zápis bol úspešne odoslaný!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RegistrationFormToSchool;
