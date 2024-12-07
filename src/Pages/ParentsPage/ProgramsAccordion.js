import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";
import "./ProgramsAccordion.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  padding: theme.spacing(1),
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  borderRadius: "15px",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "0px solid rgba(0, 0, 0, .125)",
}));

export default function ProgramAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography> Na bicykli bezpečne a zdravo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Zámer projektu :
          <ul>
            <li>
              Pripraviť deti na budúci samostatný a zodpovedný pohyb v cestnej
              premávke. Poznať a rešpektovať pravidlá cestnej premávky v  roli
              chodca, spolujazdca, kolobežkára, cyklistu, korčuliara
              i potencionálneho vodiča motorového vozidla.
            </li>
            <li>
              Vytvárať správne a trvalé pohybové návyky už v útlom detstve. To
              čo dieťa získava v detstve využíva v dospelosti. Pozitívny vzťah k
              pohybovej aktivite ovplyvňuje pozitívne nielen zdravotný stav, ale
              aj budúce úspechy v živote . Z aktívnych detí vyrastú aktívni
              dospelí, ktorí budú príkladom pre svoje deti.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Projekt škola podporujúca zdravie</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Cieľom je :
          <ul>
            <li>
              klásť dôraz na dentálnu hygienu u detí, prevencia proti zubnému
              kazu
            </li>
            <li>
              v spolupráci s rodinou predchádzať u detí závislosti na sladkosti,
              drogy a iné omamné látky
            </li>
            <li>
              v spolupráci so školskou kuchyňou dodržiavať zásady správnej
              výživy a dodržiaqvať pitný režim
            </li>
            <li>
              pravidelnou realizáciou pobytu vonku utvárať u detí pozitívne
              postoje k svojmu zdraviu i k zdraviu iných, realizovať aktivity
              smerujúce k prevencii obezity aktívnym pohybom na čerstvom vzduchu{" "}
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Projekt Adamko - zdravo hravo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Cieľom je :
          <ul>
            <li>skvalitnenie života detí a rodiny </li>
            <li>
              rozširovannie poznania a pozitívne osvojovanie si ochrany
              vlastného zdravia ale i zdravia iných
            </li>
            <li>zvyšovanie si zdravotnej uvedomenosti detí</li>
            <li>
              oboznamovanie sa so správaním sa k zdravotne oslabeným jedincom
            </li>
            <li>
              fixovanie si u detí žiaducich modelov správania sa k najbližšej
              komunite, k prírode a k okoliu
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            Projekt s Bezpečkom bezpečne na ceste i mimo nej
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Cieľom je :
          <ul>
            <li>
              motiváciou a aktivitami viesť deti a dospelých k bezpečnosti na
              cestách, ktorý sa prejaví v znížení počtu dopravných nehôd
              zapríčinených deťmi a to ich vhodným správaním sa na cestách
            </li>
            <li>
              vytvoriť vhodné podmienky na bezpečie a to hlavne deti cyklistov s
              cieľom podporovať zdravý rast
            </li>
            <li>
              sprievodnými akciami viesť deti i dospelých k prevencii
              bezpečnosti na cestách / dopravné ihrisko v areáli MŠ
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Projekt DANONE Pre  zdravie detí</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Cieľom je :
          <ul>
            <li>
              reagovať na celoeurópsku potrebu ozdravenia výživy obyvateľstva
              prostredníctvom úpravy stravovacích návykov
            </li>
            <li>
              prostredníctvom detského interaktívneho divadelného predstavenia a
              ďalších podporných prostriedkov podporiť správne stravovanie a
              správne ponímanie zdravého životného štýlu u detí predškolského
              veku a postupne u širokej verejnosti
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
