import React from "react";
import "./PageName.css"; // Create a CSS file for styles

const PageName = ({ pageName }) => {
  return (
    <div className="text-block">
      <div className="centered-text">{pageName}</div>
    </div>
  );
};

export default PageName;
