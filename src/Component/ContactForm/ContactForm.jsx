import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { data } from "react-router-dom";

const ContactPage = () => {
  let messageResponce = useRef()
  let [Data, setData] = useState({
    Name: `Abdul Korim`,
    Email: `abdulkorimwebdeveloper@gmail.com`,
    Message: ``,
  });
  let [DataStore, setDataStore] = useState([]);
  let HandelChange = (proparty, value) => {
    setData((preData) => ({
      ...preData,
      [proparty]: value,
    }));
  };

  const SendMessage = (e) => {
    e.preventDefault();
    setDataStore(Data);
    messageResponce.current.className =`flex flex-col`
  };
  return (
    <section className="px-5 py-20 flex flex-col md:flex-row items-center justify-center gap-10">
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="image/myPhoto.jpg"
          alt="Contact"
          className="rounded-2xl shadow-2xl w-[80%] max-w-md object-cover"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 bg-[rgba(41,40,52,0.25)] p-10 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-mono italic font-semibold text-white mb-7 text-center md:text-left">
          Contact Us
        </h2>

        <form className="flex flex-col space-y-5" onSubmit={SendMessage}>
          <input
            value={Data.Name}
            onChange={(e) => {
              HandelChange("Name", e.target.value);
            }}
            type="text"
            required
            placeholder="Your Name"
            className="p-3 rounded-lg bg-white/20 text-white placeholder:text-[#ADB2B1] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            onChange={(e) => {
              HandelChange("Email", e.target.value);
            }}
            required
            value={Data.Email}
            placeholder="Your Email"
            className="p-3 rounded-lg bg-white/20 text-white placeholder:text-[#ADB2B1] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            onChange={(e) => {
              HandelChange("Message", e.target.value);
            }}
            value={Data.Message}
            placeholder="Your Message"
            required
            rows={5}
            className="p-3 rounded-lg bg-white/20 text-white placeholder:text-[#ADB2B1] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-[#772AB3] hover:bg-[#C753FE] transition-colors text-white py-3 rounded-full font-semibold mt-3 cursor-pointer"
          >
            Send Message
          </button>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="md:text-xl hidden"
            ref={messageResponce}
          >
            <h2 className="">
              Your Name :{" "}
              <span className="text-gray-500">{DataStore.Name}</span>{" "}
            </h2>
            <h2>
              Your Email :{" "}
              <span className="text-gray-500">{DataStore.Email}</span>{" "}
            </h2>
            <h2>
              Your Message :{" "}
              <span className="block text-white font-mono italic">
                "{DataStore.Message}"
              </span>
            </h2>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactPage;
