import React from "react";
import "./FullWidthText.css";

const FullWidthText = ({ id, text }) => {
  return (
    <div id={id} className="full-width-container">
      {text}
    </div>
  );
};

export default FullWidthText;
