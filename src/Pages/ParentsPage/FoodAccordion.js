import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";
import "./FoodAccordion.css";

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
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "1.2rem", transform: "rotate(90deg)" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(227, 247, 88, 0.8)",
  flexDirection: "column",
  borderRadius: "15px",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(180deg)",
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

export default function FoodAccordion() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const files = [
    {
      label: "DOTÁCIA NA STRAVU",
      link: "http://www.mszupkova.sk/podstranky/skolska-jedalen.html?redirect=custom-file&id=204&download=file&name=Dot%C3%A1cia%20na%20stravu%20k%C4%BE%C3%BA%C4%8D%202022.pdf",
    },
    {
      label: "Čestné vyhlásenie",
      link: "http://www.mszupkova.sk/podstranky/skolska-jedalen.html?redirect=custom-file&id=206&download=file&name=%C4%8Destn%C3%A9%20vyhl%C3%A1senie%20od%202022.pdf",
    },
    {
      label: "Tabuľka-dotácia na stravu",
      link: "http://www.mszupkova.sk/podstranky/skolska-jedalen.html?redirect=custom-file&id=197&download=file&name=tabu%C4%BEka-dot%C3%A1cia%20na%20stravu.pdf",
    },
    {
      label: "Obedy zadarmo",
      link: "http://www.mszupkova.sk/podstranky/skolska-jedalen.html?redirect=custom-file&id=198&download=file&name=odhl%C3%A1%C5%A1ka%20z%20dota%C4%8D%C3%A9ho%20programu%20M%C5%A0.pdf",
    },
    {
      label: "Informácie k dotácii na stravu",
      link: "http://www.mszupkova.sk/podstranky/skolska-jedalen.html?redirect=custom-file&id=190&download=file&name=Inform%C3%A1cie%20k%20dot%C3%A1cii%20na%20stravu.pdf",
    },
  ];
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            sx={{
              fontWeight: "bold", // Center text within the container
            }}
          >
            Zobraziť dokumenty
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="file-icons-block">
            {files.map((file, index) => (
              <a href={file.link} key={index}>
                <div className="file-item" key={index}>
                  <div className="file-icon">
                    <svg
                      width="50px"
                      height="90px"
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
                  <div className="file-label">{file.label}</div>
                </div>
              </a>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
