import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const FindCard = () => {
  return (
    <>
      <section className="FindCard flex flex-col space-y-10 px-5 py-10 md:py-20 w-full justify-center items-center md:flex-row md:w-[1400px] md:mx-auto md:px-10 md:justify-between md:items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-1/2"
        >
          <img className="md:w-[500px]" src="image/FindCard.png" alt="Find Card png" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col space-y-5 md:w-1/2"
        >
          <h2 className="text-3xl font-mono italic font-semibold w-[90%] md:w-full md:text-4xl">
            Find the Perfect Card for You
          </h2>
          <p className="text-sm text-[#ADB2B1] w-[90%]">
            Unlocking the Power of Crypto, Both Virtually and Physically Manage
            your crypto effortlessly and spend it seamlessly with Wern. Our
            virtual card allows for instant and secure online transactions,
            while the physical Wern Card empowers you to convert and spend your
            crypto at millions of merchants worldwide. Experience the
            flexibility and convenience of both options, all within the secure
            and user-friendly Wern ecosystem.
          </p>
          <Button
            sx={{
              width: "150px",
              background: "#772AB3",
              borderRadius: "120px",
              fontFamily: "bold"
            }}
            variant="contained"
          >
            Learn More
          </Button>
        </motion.div>

      </section>
    </>
  );
};

export default FindCard;
