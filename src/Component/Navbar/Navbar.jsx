import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Navbararea = () => {
  let navite = useNavigate()
  const ContactBtn =()=>{
    navite("/contact")
  }
  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}  // start position
        animate={{ y: 0, opacity: 1 }}   // final position
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center px-5 justify-between bg-transparent md:justify-around backdrop-blur-2xl fixed top-0 left-0 w-full"
      >
        <div className='w-1/2'>
          <img className='md:w-[200px]' src="image/logo.png" alt="site logo" />
        </div>
        <div>
          <Button onClick={ContactBtn}
            sx={{ border:"2px solid #772AB3", color:"#772AB3", borderRadius:"10px" }}
            variant="outlined"
          >
            Contact
          </Button>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbararea;
