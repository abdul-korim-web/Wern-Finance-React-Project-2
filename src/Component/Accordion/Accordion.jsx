import React from "react";
import { motion } from "framer-motion";

const PersionReviewCard = () => {
  const Review = [
    {
      reviewImage: `image/Reviewimage.png`,
      peirsionImage: `image/persion1.png`,
      reviewText: `"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."`,
      persionNamme: `Hadid Khan`,
      persionRole: `UIUX Designer`,
    },
    {
      reviewImage: `image/Reviewimage.png`,
      peirsionImage: `image/persion2.png`,
      reviewText: `""It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment."`,
      persionNamme: `Wade Warren`,
      persionRole: `Web Designer`,
    },
    {
      reviewImage: `image/Reviewimage.png`,
      peirsionImage: `image/persion3.png`,
      reviewText: `""I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "`,
      persionNamme: `Jenny Wilson`,
      persionRole: `Trust Administrator`,
    },
  ];

  return (
    <>
      <section className="PersionReviewCard">
        <div className="flex flex-warp flex-col py-10 px-5 justify-center items-center space-y-5 rounded-2xl shadow-2xl md:flex-row md:px-10 md:justify-center md:space-x-5 md:py-20 ">
          {Review.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-black p-5 flex flex-col space-y-5 rounded-2xl md:p-7"
            >
              <div className="flex flex-col space-y-5">
                <img
                  className="w-[45px]"
                  src={item.reviewImage}
                  alt={item.reviewImage}
                />
                <p className="text-white font-semibold italic md:w-[90%]">
                  {item.reviewText}
                </p>
              </div>
              <div className="flex space-x-3 items-center">
                <div>
                  <img
                    className="w-[30px]"
                    src={item.peirsionImage}
                    alt={item.peirsionImage}
                  />
                </div>
                <div>
                  <h2 className="font-mono italic">{item.persionNamme}</h2>
                  <h2 className="text-sm text-[#ADB2B1] font-mono italic">
                    {item.persionRole}
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PersionReviewCard;
