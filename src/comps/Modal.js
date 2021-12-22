import React from 'react';

import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    //makes sure to hide modal when clicking on backdrop, not
    //image itself
    if (e.target.classList.contains('backdrop')) {
      //setting img to null hides modal since modal only shows
      //when selectedImg != null
      setSelectedImg(null);
    }
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}

export default Modal;