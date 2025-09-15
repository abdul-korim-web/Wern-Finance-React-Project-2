import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <>
      <section className="Vision py-10 px-5 md:py-20 md:w-[1400px] md:mx-auto md:px-10 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col justify-center items-center bg-[#232529] space-y-3 text-center py-5 rounded-2xl"
        >
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-2xl font-semibold"
          >
            Wern’s Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: false }}
            className="text-sm text-[#C753FE] font-semibold font-mono italic md:text-2xl md:w-[50%]"
          >
            Building a financial future where everyone has access to secure and
            effortless digital money.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default Vision;
