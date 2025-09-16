import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CreateNewDebitCard = () => {
  return (
    <section className="relative w-full px-5 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between md:w-[1400px] md:mx-auto">
      {/* Left Side (Text) */}
      <div className="flex flex-col space-y-5 md:w-1/2 bg-[rgba(41,40,52,0.4)] rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-md">
        <h2 className="text-3xl md:text-5xl font-mono italic font-semibold text-white leading-snug">
          Wern Debit Card
        </h2>
        <p className="text-sm md:text-base text-[#ADB2B1] w-[90%]">
          More than just a card, it's a bridge to a new financial experience.
          Embrace the simplicity and security of spending your Cardano with
          the Wern Card.
        </p>
        <Button
          sx={{
            width: "180px",
            background: "#772AB3",
            borderRadius: "120px",
            fontSize: "13px",
            fontWeight: "600",
            textTransform: "none",
          }}
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          Create New Card
        </Button>
        <p className="text-sm text-[#772AB3]">Will be available soon</p>
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="image/createcard.png"
          alt="createcard"
          className="w-[280px] md:w-[450px] lg:w-[520px] drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default CreateNewDebitCard;
