import { motion } from "framer-motion";
import React from "react";

const Offer = () => {
  const offerItem = [
    {
      image: "image/offer1.png",
      heading: `Cardano Debit-Cards`,
      des: `Cardano, simplified. The debit card that makes crypto spending easy.`,
    },
    {
      image: "image/offer2.png",
      heading: `On & Off Ramp`,
      des: `Fiat meets crypto, effortlessly buy, sell, and manage.`,
    },
    {
      image: "image/offer3.png",
      heading: `Solutions for business`,
      des: `Empowering businesses with effortless crypto payments and seamless fiat solutions.`,
    },
  ];

  return (
    <>
      <section className="Offer flex flex-col justify-center items-center space-y-5 py-10 md:py-20 md:space-y-10 md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h2 className="font-semibold text-2xl font-mono italic md:text-4xl">
            What do we offer?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 px-10 space-y-5 justify-center items-center md:grid-cols-3 md:px-10">
          {offerItem.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="flex items-center justify-center space-x-3"
            >
              <div>
                <img
                  className="w-[50px]"
                  src={item.image}
                  alt="offerimage"
                />
              </div>
              <div className="flex flex-col space-y-1 md:space-y-3">
                <h2 className="text-sm md:text-2xl font-semibold">
                  {item.heading}
                </h2>
                <p className="text-sm text-[#ADB2B1] w-[95%]">{item.des}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Offer;
