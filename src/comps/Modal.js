import React from 'react';

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
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="enlarged" />
    </div>
  )
}

export default Modal;