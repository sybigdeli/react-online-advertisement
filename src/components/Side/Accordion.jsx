import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function BasicAccordion() {
  const aaaa = [
    {
      title: "سلام",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با ",
    },
    {
      title: "sss",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با ",
    },
  ];

  return (
    <div>
      {aaaa.map((value, i) => (
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
          key={i}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ borderBottom: "1px solid #E6E6E6" }}
          >
            <Typography sx={{ fontFamily: "Estedad" }}>
              {value.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Estedad" }}>
              {value.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default BasicAccordion;
