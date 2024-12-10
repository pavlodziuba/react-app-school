import React, { useState } from "react";
import "./AddGallery.css";
import {
  Snackbar, // Import Snackbar for the popup message
  Alert, // Import Alert to show the success message
} from "@mui/material";

const AddGallery = ({ onFileDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]); // State to store files and previews
  const [galleryName, setGalleryName] = useState(""); // State for gallery name
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertMessage, setAlertMessage] = useState(""); // State for the alert message
  const [alertSeverity, setAlertSeverity] = useState("success"); // State to manage alert type (success/error)

  // Close Snackbar after some time
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  // Handle drag leave event
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  // Handle drop event for files
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
    if (onFileDrop) {
      onFileDrop(droppedFiles); // Call the callback function passed as prop
    }
  };

  // Trigger the file input when the drag-and-drop area is clicked
  const handleClick = () => {
    document.getElementById("fileInput").click(); // Trigger file input click
  };

  // Handle file selection via input
  const handleFileInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
    if (onFileDrop) {
      onFileDrop(selectedFiles); // Call the callback function passed as prop
    }
  };

  // Function to handle both file selection and drag-and-drop
  const handleFiles = (newFiles) => {
    const newFilesWithPreviews = newFiles.map((file) => {
      const reader = new FileReader();

      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve({
            file: file,
            preview: reader.result, // Data URL of the file
          });
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      });
    });

    // After all the previews are generated, update the state
    Promise.all(newFilesWithPreviews).then((filesWithPreviews) => {
      setFiles((prevFiles) => [...prevFiles, ...filesWithPreviews]);
    });
  };

  // Handle deleting a file
  const handleDeleteFile = (fileToDelete) => {
    setFiles((prevFiles) =>
      prevFiles.filter((file) => file.file !== fileToDelete)
    ); // Remove file from list
  };

  const handleAddGallery = () => {
    // Check if gallery name and files are valid
    if (!galleryName && files.length === 0) {
      setAlertMessage("Vyžaduje sa názov galérie aj súbory.");
      setAlertSeverity("error");
      setOpenSnackbar(true);
    } else if (!galleryName) {
      setAlertMessage("Vyžaduje sa názov galérie.");
      setAlertSeverity("error");
      setOpenSnackbar(true);
    } else if (files.length === 0) {
      setAlertMessage("Vyžaduje sa aspoň jeden súbor.");
      setAlertSeverity("error");
      setOpenSnackbar(true);
    } else {
      // If everything is valid
      setAlertMessage("Galéria uspešne vytvorená!");
      setAlertSeverity("success");
      setFiles([]);
      setGalleryName("");
      setOpenSnackbar(true);
    }
  };

  const handleGalleryNameChange = (e) => {
    setGalleryName(e.target.value); // Update gallery name state
  };

  return (
    <div className="content">
      <div className="add-gallery-content">
        {/* Placeholder for adding a gallery name */}
        <div className="add-name-for-gallery">
          <input
            className="styled-input"
            type="text"
            placeholder="Názov galérie"
            value={galleryName}
            onChange={handleGalleryNameChange}
          />
        </div>

        {/* Drag-and-Drop Block */}
        <div
          className={`drag-and-drop-block ${isDragging ? "dragging" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick} // Trigger file input when clicked
        >
          <div className="drag-and-drop-content">
            <p>Pridajte svoje fotografie sem alebo kliknite</p>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L16 6H13V14H11V6H8L12 2ZM5 22C3.9 22 3 21.1 3 20V8C3 6.9 3.9 6 5 6H7V8H5V20H19V8H17V6H19C20.1 6 21 6.9 21 8V20C21 21.1 20.1 22 19 22H5Z"
                fill="#555"
              />
            </svg>
            <p className="grey-text">
              Podporované formáty: *.jpg, *.png, *.jpeg
            </p>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          id="fileInput"
          type="file"
          multiple
          accept=".jpg, .jpeg, .png"
          onChange={handleFileInputChange}
          style={{ display: "none" }}
        />

        {/* Display list of files and their previews */}
        <div className="file-list">
          {files.length > 0 && (
            <ul>
              {files.map((fileObj, index) => (
                <li key={index} className="file-item">
                  <img
                    src={fileObj.preview} // Use preview data URL for the image
                    alt={`preview-${index}`}
                    className="file-thumbnail"
                    style={{ maxHeight: "150px" }} // Set image dimensions
                  />
                  <span>{fileObj.file.name}</span>
                  <button
                    className="delete-file-button"
                    onClick={() => handleDeleteFile(fileObj.file)}
                  >
                    Vymazať
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Upload Button */}
      <div className="add-gallery-button" onClick={handleAddGallery}>
        <button className="styled-button">Pridať galériu</button>
      </div>

      {/* Snackbar for success/error message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={alertSeverity} // Use success/error severity
          sx={{
            width: "100%",
            fontSize: "1.2rem",
            padding: "20px",
            backgroundColor:
              alertSeverity === "success" ? "#4caf50" : "#f44336",
            color: "#fff",
          }}
        >
          {alertMessage} {/* Display the alert message */}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddGallery;
