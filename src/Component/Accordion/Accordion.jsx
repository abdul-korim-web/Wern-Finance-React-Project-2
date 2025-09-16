import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

export default function AccordionSection() {
  const faqData = [
    {
      q: "What credit score do I need to apply for a credit card?",
      a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      q: "Can I use Wern Card internationally?",
      a: "Yes, you can use the Wern Card at millions of merchants worldwide that accept standard card payments.",
    },
    {
      q: "Is there an annual fee?",
      a: "Some Wern Cards may have an annual fee, while others are free. Check the terms before applying.",
    },
    {
      q: "Can I use Wern Card internationally?",
      a: "Yes, you can use the Wern Card at millions of merchants worldwide that accept standard card payments.",
    },
    {
      q: "Is there an annual fee?",
      a: "Some Wern Cards may have an annual fee, while others are free. Check the terms before applying.",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl font-semibold mb-5 md:mb-7 font-mono"
      >
        FAQs
      </motion.h2>

      {faqData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <Accordion
            defaultExpanded={index === 0}
            sx={{
              background: "transparent",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              mb: 2,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#C753FE" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography component="span" sx={{ fontWeight: "600", fontSize: "15px" }}>
                {item.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "14px", color: "#ADB2B1" }}>
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </div>
  );
}
