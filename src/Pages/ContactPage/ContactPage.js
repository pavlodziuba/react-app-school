import React from "react";
import "./ContactPage.css";
import AskForm from "./AskForm";

const ContactPage = () => {
  return (
    <div className="program-container">
      <div className="program-container_flex1">
        <div className="text-container_contact">
          <p>
            <strong>Materská škola Zupková 37</strong>
            <br />
            <strong>Jana Horizralová</strong> – riaditeľka školy
            <br />
            Zupková 37
            <br />
            040 22, Košice
            <br />
            <strong>e-mail:</strong>{" "}
            <a href="mailto:zupkova37@centrum.sk">zupkova37@centrum.sk</a>
            <br />
            <strong>Web:</strong>{" "}
            <a href="http://www.mszupkova.sk">www.mszupkova.sk</a>
            <br />
            <br />
            <strong>Tel. riaditeľka MŠ:</strong> 055 / 671 34 72, 0907 900 141
            <br />
            <br />
            <strong>Anna Obrušníková</strong> – vedúca školskej jedálne
            <br />
            <strong>Tel. vedúca ŠJ:</strong> 055 / 671 34 73, 0907 900 188
            <br />
          </p>
        </div>
      </div>
      <div className="program-container_flex2">
        <AskForm />
      </div>
    </div>
  );
};

export default ContactPage;
