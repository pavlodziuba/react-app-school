import React from "react";
import "./ParentsPage.css";
import RegistrationForm from "./RegistrationFormOnProgram";
import ProgramAccordion from "./ProgramsAccordion";
import FoodAccordion from "./FoodAccordion";
import Classes from "./Classes";
import FullWidthText from "../../components/FullWidthText";

const ParentsPage = () => {
  return (
    <div className="content-parents">
      <div className="second-navigation">
        <a href="#stravovanie">Stravovanie</a>
        <a href="#programy">Programy</a>
        <a href="#triedy">Triedy</a>
      </div>
      <FullWidthText id="stravovanie" text="STRAVOVANIE" />
      <div className="food-container">
        <div className="food-container_flex1">
          <div className="schedule">
            Časový harmonogram stravovania:
            <br />
            <br />
            Raňajky
            <br />
            8:30 – 8:45 (1. a 2. trieda)
            <br />
            8:45 – 9:00 (3.,4. a 5. trieda)
            <br />
            <br />
            Obed
            <br />
            11:15 – 11:45 (1. a 2. trieda)
            <br />
            11:45 – 12:15 (3.,4. a 5. trieda)
            <br />
            <br />
            Olovrant
            <br />
            14:30 – 14:45 (1. a 2. trieda)
            <br />
            14:15 – 15:00 (3.,4. a 5. trieda).
            <br />
            <br />
            <a href="/" className="food-menu-link">
              Jedálny lístok je TU
            </a>
            Zmeny stravného od 1.1.2025
          </div>
        </div>
        <div className="food-container_flex2">
          <div className="duties">
            <h3>Povinnosti rodičov </h3>
            <br />
            <p>
              Podľa uznesenia plenárneho zasadnutia Rady rodičovského združenia
              sa príspevok na stravu uhrádza najneskor do 15. dňa mesiaca
              príslušného kalendárneho roka. (Príklad Október sa uhrádza do 15.
              Októbra). Ak príspevok na stravu nebude uhradený do stanoveného
              termínu a dieťa nemá vedený v účt. evidencii preplatok, nemá dieťa
              nárok na stravu.
            </p>
            <br />
            <p>
              Vyhlasovanie detí zo stravy v prípade ich neprítomnosti sa
              uskutočňuje deň vopred telefonicky alebo osobne u vedúcej ŠJ do
              8:00 hod, v prípade neodhlásenia je dieťa považované za prítomné a
              strava sa mu počíta.
            </p>
          </div>
        </div>
      </div>
      <div className="food-files">
        <FoodAccordion />
      </div>

      <FullWidthText id="programy" text="PROGRAMY" />
      <div className="program-container">
        <div className="program-container_flex1">
          <ProgramAccordion />
        </div>
        <div className="program-container_flex2">
          <RegistrationForm />
        </div>
      </div>
      <FullWidthText id="triedy" text="TRIEDY" />
      <div>
        <Classes />
      </div>
    </div>
  );
};

export default ParentsPage;
