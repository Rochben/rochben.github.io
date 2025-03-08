import React from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Header from '../../components/Header/Header';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';
import MenuSection from '../../components/MenuSection/MenuSection';
import ContactSection from '../../components/ContactSection/ContactSection';

function Home() {
  return (
    <div className='home-page'>
        <div id="home">
            <Header />
        </div>

        <div id="about">
            <AboutUsSection />
        </div>

        <div id="menu">
            <MenuSection />
        </div>

        <div id="gallery">
            <ImageGallery />
        </div>

        <div id="contact">
            <ContactSection />
        </div>
    </div>
  )
}

export default Home;