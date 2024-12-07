import React from "react";
import "./Registration.css";
import RegistrationFormToSchool from "./RegistrationFormToSchool";
import FullWidthText from "../../components/FullWidthText";

const Registration = () => {
  return (
    <div className="content-parents">
      <div className="program-container">
        <div className="program-container_flex1">
          <div className="text-container">
            <p>
              <strong>Vážení rodičia,</strong>
            </p>
            <br />
            <p>
              Srdečne Vás pozývame na zápis Vašich detí do Materskej školy
              <strong> MŠ Zupkova 37</strong> na školský rok
              <strong> 2025/2026</strong>. Zápis sa uskutoční v termíne od
              <strong> 1.3.2025</strong> do <strong>30.5.2025</strong>.
            </p>
            <br />
            <h3>Postup zápisu:</h3>
            <ul>
              <li>
                <strong>Prihláška</strong> – Rodičia sú povinní vyplniť a
                odovzdať{" "}
                <a href="https://www.bystraskolka.sk/assets/files/obsah/96-Ziadost-o-prijatie-do-de-tskych-jasli-update.pdf">
                  prihlášku na zápis,
                </a>{" "}
                alebo si ju môžete vyzdvihnúť priamo v materskej škole.
              </li>
              <li>
                <strong>Doplňujúce dokumenty</strong> – K prihláške je potrebné
                priložiť:
                <ul>
                  <li>Kópiu rodného listu dieťaťa</li>
                  <li>
                    Potvrdenie o zdravotnom stave dieťaťa (lekárske vyšetrenie
                    nie staršie ako 6 mesiacov)
                  </li>
                  <li>Doklad o trvalom pobyte dieťaťa (ak je potrebné)</li>
                </ul>
              </li>
              <li>
                <strong>Forma zápisu</strong> – Zápis bude prebiehať:
                <ul>
                  <li>
                    <strong>Osobne:</strong> Rodičia môžu prísť do materskej
                    školy a vyplniť prihlášku osobne. K dispozícii budú aj naše
                    zamestnankyne, ktoré vám ochotne pomôžu s vyplnením všetkých
                    potrebných dokumentov.
                  </li>
                  <li>
                    <strong>Online:</strong> Ak nemôžete prísť osobne, ponúkame
                    aj možnosť zápisu prostredníctvom elektronického formulára.
                    Po vyplnení formulára vám potvrdíme zápis e-mailom.
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Rodičovské stretnutie:</h3>
            <p>
              Po ukončení zápisu sa bude konať aj informačné stretnutie pre
              rodičov, kde vás oboznámime s organizáciou prevádzky materskej
              školy a odpovieme na vaše otázky.
            </p>
            <p>
              Tešíme sa na Vašu účasť a na Vaše deti, ktoré nám spríjemnia nový
              školský rok.
            </p>
            <br />
            <p>
              <strong>S pozdravom,MŠ Zupkova 37</strong>
            </p>
          </div>
        </div>
        <div className="program-container_flex2">
          <RegistrationFormToSchool />
        </div>
      </div>
      <FullWidthText
        id="file"
        text={
          <a
            href="https://www.bystraskolka.sk/assets/files/obsah/96-Ziadost-o-prijatie-do-de-tskych-jasli-update.pdf"
            className="file-link"
          >
            <div className="file-item">
              <div className="file-icon">
                <svg
                  width="50px"
                  height="70px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_901_2655)">
                    <path
                      d="M26.8901 19.3101C29.2701 20.0901 31.0001 22.3501 31.0001 25.0001C31.0001 28.3101 28.3101 31.0001 25.0001 31.0001C21.6901 31.0001 19.0001 28.3101 19.0001 25.0001C19.0001 21.6901 21.6901 19.0001 25.0001 19.0001C25.6601 19.0001 26.3001 19.1101 26.8901 19.3101Z"
                      fill="#ffff"
                    />
                    <path
                      d="M27 19L26.89 19.31C26.3 19.11 25.66 19 25 19C21.69 19 19 21.69 19 25C19 28.31 21.69 31 25 31H2C1 31 1 30 1 30V2C1 1 2 1 2 1H17V10C17 10 17 11 18 11H27V19Z"
                      fill="#f178b6"
                    />
                    <path
                      d="M26 9C27 10 27 11 27 11H18C17 11 17 10 17 10V1C17 1 18 1 19 2L26 9Z"
                      fill="#ffff"
                    />
                    <path
                      d="M27 16V11C27 11 27 10 26 9L19 2C18 1 17 1 17 1M17 1H2C2 1 1 1 1 2V30C1 30 1 31 2 31H18M17 1V10C17 10 17 11 18 11H23M27 25L25 27M25 27L23 25M25 27V23M31 25C31 21.687 28.313 19 25 19C21.687 19 19 21.687 19 25C19 28.313 21.687 31 25 31C28.313 31 31 28.313 31 25Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_901_2655">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="file-label">Prihláška na zápis</div>
            </div>
          </a>
        }
      />
    </div>
  );
};

export default Registration;
