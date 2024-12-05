import React from "react";
import "./Registration.css";
import RegistrationFormToSchool from "./RegistrationFormToSchool";

const Registration = () => {
  return (
    <div className="content-parents">
      <div className="program-container">
        <div className="program-container_flex1">
          Vážení rodičia, srdečne Vás pozývame na zápis Vašich detí do Materskej
          školy MŠ Zupkova 37 na školský rok 2025/2026. Zápis sa uskutoční v
          termíne od 1.3.2025 do 30.5.2025. Postup zápisu: Prihláška – Rodičia
          sú povinní vyplniť a odovzdať prihlášku na zápis, ktorú nájdete nižšie
          na stránke alebo si ju môžete vyzdvihnúť priamo v materskej škole.
          Doplňujúce dokumenty – K prihláške je potrebné priložiť: Kópiu rodného
          listu dieťaťa Potvrdenie o zdravotnom stave dieťaťa (lekárske
          vyšetrenie nie staršie ako 6 mesiacov) Doklad o trvalom pobyte dieťaťa
          (ak je potrebné) Forma zápisu – Zápis bude prebiehať: Osobne: Rodičia
          môžu prísť do materskej školy a vyplniť prihlášku osobne. K dispozícii
          budú aj naše zamestnankyne, ktoré vám ochotne pomôžu s vyplnením
          všetkých potrebných dokumentov. Online: Ak nemôžete prísť osobne,
          ponúkame aj možnosť zápisu prostredníctvom elektronického formulára.
          Po vyplnení formulára vám potvrdíme zápis e-mailom. Rodičovské
          stretnutie: Po ukončení zápisu sa bude konať aj informačné stretnutie
          pre rodičov, kde vás oboznámime s organizáciou prevádzky materskej
          školy a odpovieme na vaše otázky. Tešíme sa na Vašu účasť a na Vaše
          deti, ktoré nám spríjemnia nový školský rok. S pozdravom,MŠ Zupkova 37
        </div>
        <div className="program-container_flex2">
          <RegistrationFormToSchool />
        </div>
      </div>
    </div>
  );
};

export default Registration;
