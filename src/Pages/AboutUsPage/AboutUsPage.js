import React from "react";
import "./AboutUsPage.css";
import Classes from "../ParentsPage/Classes";
import FullWidthText from "../../components/FullWidthText";
import img from "../../photos/2166_img-3_5_2_b.jpg";

const About = () => {
  return (
    <div className="content">
      <div className="about-us-info">
        <div className="about-us-info-block">
          <div className="about-us-info-icon">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0001 20.3333V15M15.0001 9.66663H15.0134M28.3334 15C28.3334 22.3638 22.3639 28.3333 15.0001 28.3333C7.63628 28.3333 1.66675 22.3638 1.66675 15C1.66675 7.63616 7.63628 1.66663 15.0001 1.66663C22.3639 1.66663 28.3334 7.63616 28.3334 15Z"
                stroke="#1E1E1E"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="about-us-info-text">
            Naša materská škola je v zriaďovateľskej pôsobnosti mesta
            Košice. Nachádza sa na území okresu Košice III., MČ Dargovských
            hrdinov.Je umiestnená v účelovej budove pavilónového
            typu.V súčasnosti máme 6 tried s kapacitou 150 detí. Poskytujeme
            celodennú výchovno-vzdelávaciu starostlivosť pre detivo veku o 2 – 6
            rokov a deťom s odloženou povinnou školskou dochádzkou.
          </div>
        </div>
        <div className="about-us-info-block">
          <div className="about-us-info-icon">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0001 20.3333V15M15.0001 9.66663H15.0134M28.3334 15C28.3334 22.3638 22.3639 28.3333 15.0001 28.3333C7.63628 28.3333 1.66675 22.3638 1.66675 15C1.66675 7.63616 7.63628 1.66663 15.0001 1.66663C22.3639 1.66663 28.3334 7.63616 28.3334 15Z"
                stroke="#1E1E1E"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="about-us-info-text">
            Areál školy sa nachádza v tichom prostredí mimo cestných
            komunikácií. Súčasťou školy je rozsiahla školská záhrada s množstvom
            zelene a účelovo rozmiestnenými hracími prvkami pre deti.
            Disponujeme aj dopravným ihriskom. Dopravná výchova sa týmto
            koncepčne prelína celým Školským vzdelávacím programom. V blízkom
            okolí sa nachádza Lesopark, ktorý využívame tak na športové aktivity
            ako aj na spoznávanie prírody.
          </div>
        </div>
      </div>
      <div className="centerd-photo">
        <div className="photo">
          <img src={img} alt="news-img"></img>
        </div>
      </div>
      <div className="about-us-additional-info">
        <div className="additional-info-block">
          <p>
            <strong>Výchovno-vzdelávacia činnosť</strong> sa realizuje podľa
            Školského vzdelávacieho programu. Podporujeme osobnostný rozvoj detí
            v oblasti sociálno-emocionálnej, intelektuálnej, telesnej, morálnej,
            estetickej, rozvíjame schopnosti a zručnosti v súlade s
            individuálnymi a vekovými osobitosťami detí. Vo výchovno-vzdelávacom
            procese využívame prirodzenú detskú zvedavosť, tvorivosť a
            skúmavosť.
          </p>
        </div>
        <div className="additional-info-block">
          <p>
            O výchovu a vzdelávanie sa stará <strong>13-členný tím</strong>{" "}
            kvalifikovaných pedagógov na čele s riaditeľkou školy.
          </p>
        </div>
        <div className="additional-info-block">
          <p>
            Ostatnú činnosť zabezpečujú prevádzkoví zamestnanci: upratovanie
            majú na starosti <strong>4 upratovačky</strong>. O stravu sa stará
            vedúca školskej jedálne, <strong>dve kuchárky</strong> a{" "}
            <strong>jedna pomocná sila</strong>. Financie drží v rukách
            hospodárka.
          </p>
        </div>
      </div>

      <FullWidthText id="triedy" text="TRIEDY" />
      <Classes />
    </div>
  );
};

export default About;
