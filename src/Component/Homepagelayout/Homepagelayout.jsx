import React from "react";
import Hero from '../Hero/Hero';
import Vision from '../Vision/Vision';
import Offer from '../Offer/Offer';
import CreateNewCard from '../CreateNewCard/CreateNewCard';
import FindCard from '../FindCard/FindCard';
import PersionReviewCard from "../PersionReview/PersionReviewCard"
import AccordionSection from "..//Accordion/Accordion"

const Homepagelayout = () => {
  return (
    <>
      <Hero />
      <Vision />
      <Offer />
      <CreateNewCard />
      <FindCard />
      <PersionReviewCard />
      <AccordionSection />
    </>
  );
};

export default Homepagelayout;
