import React from "react";
import "./NewsContainer.css";
import { Link } from "react-router-dom";

const NewsContainer = ({ img, link, title, text, date }) => {
  return (
    <div className="news-container">
      <div className="news-inseide-content">
        <div className="news-photo-container">
          <div className="news-photo">
            <img src={img} alt="news-img"></img>
          </div>
        </div>

        <div className="news-text-container">
          <div>
            <div className="news-title">
              <Link to={link} style={{ textDecoration: "none" }}>
                {title}
              </Link>
            </div>

            <div className="news-text">{text}</div>
          </div>
          <div className="news-date">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
