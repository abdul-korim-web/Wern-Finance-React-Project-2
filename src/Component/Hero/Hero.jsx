import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from "framer-motion";

const Hero = () => {
   const Btn = ()=>{
    alert(`This is a demo react project . please visit https://github.com/abdul-korim-web/abdul-korim-web  `)
   }
  return (
    <>
      <section className="hero pt-30 pb-20 flex flex-col space-y-10 items-center md:flex-row-reverse md:py-30 md:justify-between md:items-center">
        
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src="image/Frame.png" alt="Hero image" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="px-5 flex flex-col space-y-5 md:space-y-10 md:px-20"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-semibold text-3xl md:text-6xl md:w-[90%]">
            Spend your Cardano anywhere, anytime.
          </h2>
          <p className="text-gray-200 text-sm w-[90%] md:w-[60%] md:text-xl">
            Our user-friendly platform enables businesses and individuals to
            seamlessly convert and spend their crypto for everyday purchases.
          </p>
          <Button onClick={Btn} sx={{ width: "150px", background: "#772AB3", borderRadius:"120px", fontFamily:"bold" }} variant="contained">
            Contained <ArrowForwardIcon />
          </Button>
        </motion.div>

      </section>
    </>
  );
};

export default Hero;
