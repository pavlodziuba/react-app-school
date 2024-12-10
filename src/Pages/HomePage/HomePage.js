import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import FullWidthText from "../../components/FullWidthText";
import img1 from "../../photos/2245_img-3_3_2_b.jpg";
import img2 from "../../photos/2265_img-3_1_1_b.jpg";
import img3 from "../../photos/2166_img-3_5_2_b.jpg";
import img4 from "../../photos/2260_img-3_3_2_b.jpg";
import Classes from "../ParentsPage/Classes";
import LatestNews from "../NewsPage/LatestNews";

const HomePage = () => {
  return (
    <div className="content">
      <FullWidthText id="oznamy" text="Najnovšie správy" />
      <LatestNews />
      <FullWidthText id="fotogaleria" text="Fotogaléria" />
      <div className="photogalery">
        <div className="photogalery_photo">
          <img src={img1} alt="news-img"></img>
        </div>
        <div className="photogalery_photo">
          <img src={img2} alt="news-img"></img>
        </div>
      </div>
      <div className="photogalery">
        <div className="photogalery_photo">
          <img src={img3} alt="news-img"></img>
        </div>
        <div className="photogalery_photo">
          <img src={img4} alt="news-img"></img>
        </div>
      </div>
      <FullWidthText id="triedy" text="TRIEDY" />
      <Classes />
    </div>
  );
};

export default HomePage;
