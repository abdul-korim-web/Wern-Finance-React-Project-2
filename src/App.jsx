
import './App.css'
import {Button, Navbar} from "@heroui/react";
import {Accordion, AccordionItem} from "@heroui/react";
import Navbararea  from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Vision from './Component/Vision/Vision';
import Offer from './Component/Offer/Offer';
import CreateNewCard from './Component/CreateNewCard/CreateNewCard';
import FindCard from './Component/FindCard/FindCard';
import PersionReviewCard from "./Component/PersionReview/PersionReviewCard"
import AccordionSection from "./Component/Accordion/Accordion"
import Footer from './Component/Footer/Footer';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Homepagelayout from './Component/Homepagelayout/Homepagelayout';
import ContactForm from './Component/ContactForm/ContactForm';
import CreateNewDebitCard from './Component/CreateNewDebitCard/CreateNewDebitCard';



function App() {
 

  return (
    <BrowserRouter>
    <Navbararea/>
    <Routes>
      <Route path='/' element={<Homepagelayout/>}/>
      <Route path='contact' element={<ContactForm/>}/>
      <Route path='createcard' element={<CreateNewDebitCard/>}/>
      
    </Routes>
    
    <Footer/>
      
      
      
    </BrowserRouter>
  )
}

export default App
