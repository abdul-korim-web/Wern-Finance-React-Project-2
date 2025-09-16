import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CreateNewCard = () => {
  let native = useNavigate()
  const cratecardbtn = ()=>{
    native("/createcard")
  }
  return (
    <>
      <section className="CreateNewCard flex flex-col px-5 py-10 space-y-5 md:flex-row-reverse md:w-[1400px] md:mx-auto md:justify-center md:items-center md:py-20">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <img
            className="md:w-[500px]"
            src="image/createcard.png"
            alt="cratecardimage"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="flex flex-col space-y-3 md:space-y-5"
        >
          <h2 className="text-3xl font-semibold font-mono italic md:text-5xl">
            Wern Debit Card
          </h2>
          <p className="text-sm w-[70%] text-[#ADB2B1] md:w-[50%]">
            More than just a card, it's a bridge to a new financial experience.
            Embrace the simplicity and security of spending your Cardano with
            the Wern Card.
          </p>
          <Button onClick={cratecardbtn}
            sx={{
              width: "180px",
              background: "#772AB3",
              borderRadius: "120px",
              fontFamily: "bold",
              fontSize: "12px",
              marginTop: "5px",
            }}
            variant="contained"
          >
            Create New Card <ArrowForwardIcon />
          </Button>
          <p className="text-sm mt-1 ml-5 text-[#772AB3]">
            Will be available soon
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default CreateNewCard;
