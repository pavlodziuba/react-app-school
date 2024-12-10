import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="content">
      <div className="home">Domov</div>
      <Link to="/admin">Admin</Link>
    </div>
  );
};

export default HomePage;
