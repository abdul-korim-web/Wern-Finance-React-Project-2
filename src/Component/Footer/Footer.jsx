import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const footeritem = [
    {
      heading: `About Us`,
      items: ["Investors", "Features", "Book a demo", "Security "],
    },
    {
      heading: `Products`,
      items: ["Credits Cards", "Gift Cards", "Savings accounts", "NFT "],
    },
    {
      heading: `Useful Links`,
      items: ["Free rewards", "Documentation", "Affiliate program"],
    },
    {
      heading: `Social`,
      items: ["Changelog", "License", "Site Maps", "News "],
    },
  ];

  return (
    <footer className="px-5 pt-20 pb-30 flex flex-col space-y-5 items-center justify-center md:flex-row md:justify-between md:px-10 md:space-x-5 md:items-start bg-[rgba(41,40,52,0.25)] ">
      {/* Logo Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col space-y-2 w-2/3 border p-5 rounded-2xl border-[#ADB2B1]"
      >
        <div className="flex space-x-2">
          <img src="image/footerlogo.png" alt="footerlogo" />
          <h2 className="text-xl font-semibold font-mono italic">
            Wern Finance
          </h2>
        </div>
        <div className="text-sm text-[#ADB2B1] w-[70%]">
          Discover the power of our secure and rewarding credit cards
        </div>
      </motion.div>

      {/* Footer Columns with Animation */}
      {footeritem.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="p-5 border border-[#ADB2B1] rounded-2xl w-1/2 shadow-2xl flex flex-col"
        >
          <h2 className="text-xl font-semibold font-mono italic mb-3">
            {item.heading}
          </h2>
          {item.items.map((listitem, idx) => (
            <ul key={idx} className="text-sm text-[#ADB2B1]">
              <li className="flex flex-col space-y-2">
                <a href="#">{listitem}</a>
              </li>
            </ul>
          ))}
        </motion.div>
      ))}
    </footer>
  );
};

export default Footer;
