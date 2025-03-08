import React from 'react';
import './MenuBtn.css';

function MenuBtn() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      type='button' 
      className='btn btn-lg rounded-0 mx-2 mb-3 mb-sm-0 menu-btn'
      onClick={() => scrollToSection('menu')}
    >
      Naš meni
    </button>
  );
}

export default MenuBtn;