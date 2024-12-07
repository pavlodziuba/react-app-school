import React from "react";
import "./NewsPage.css";
import LatestNews from "./LatestNews";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NewsPage = () => {
  return (
    <div className="content">
      <LatestNews />
      <div className="all-news-button">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button type="submit" variant="contained">
            Viac oznamov
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsPage;
