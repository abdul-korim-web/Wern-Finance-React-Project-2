
import './App.css'
import {Button, Navbar} from "@heroui/react";
import {Accordion, AccordionItem} from "@heroui/react";
import Navbararea  from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Vision from './Component/Vision/Vision';
import Offer from './Component/Offer/Offer';
import CreateNewCard from './Component/CreateNewCard/CreateNewCard';


function App() {
 

  return (
    <>
    <Navbararea/>
    <Hero/>
    <Vision/>
    <Offer/>
    <CreateNewCard/>
      
      
      
    </>
  )
}

export default App
