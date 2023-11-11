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
      title: "دریا",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با ",
    },
    {
      title: "زمین",
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
            <Typography
              sx={{
                fontFamily: "Estedad",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              {value.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontFamily: "Estedad", fontSize: "15px", color: "#333" }}
            >
              {value.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default BasicAccordion;
