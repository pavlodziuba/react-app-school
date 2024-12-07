import React from "react";
import "./LatestNews.css";
import NewsContainer from "./NewsContainer";
import img1 from "../../photos/opadane-listie-clanokW.jpg";
import img2 from "../../photos/201-img-4636.jpeg";
import img3 from "../../photos/chripka-1-676x450.jpg";

const LatestNews = () => {
  return (
    <div className="latest-news-container">
      <NewsContainer
        img={img1}
        link={"/"}
        title={"Jesenná brigáda"}
        text={
          "Prosíme veľmi pekne rodičov, ktorí si nájdu čas a ochotu, aby nám pomohli pri hrabaní lístia na školskom dvore. Informácie.."
        }
        date={"11 novembra, 2024"}
      />
      <NewsContainer
        img={img2}
        link={"/"}
        title={"Bystré recepty"}
        text={
          "Na krúžku pečenia s Alickou sa nám podarilo pripraviť mnoho dobrôt. Preto sme sa rozhodli, že ich zapíšeme a ponúkneme vám ich na stiahnutie."
        }
        date={"5 novembra, 2024"}
      />
      <NewsContainer
        img={img3}
        link={"/"}
        title={"Otužovanie detí"}
        text={
          "Prichádza obdobie, kedy veľa detí reaguje, či už na nástup do kolektívu alebo na zmeny v počasí, či jedno s druhým, zvýšenou chorobnosťou. "
        }
        date={"4 septembra, 2024"}
      />
    </div>
  );
};

export default LatestNews;
