import React from "react";
import "./About.css";
import Classes from "./ParentsPage/Classes";
import FullWidthText from "../components/FullWidthText";

const About = () => {
  return (
    <div className="content">
      <FullWidthText id="triedy" text="TRIEDY" />
      <Classes />
    </div>
  );
};

export default About;
