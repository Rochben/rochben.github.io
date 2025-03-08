import React from 'react';
import './AboutUsSection.css';
import { motion } from 'framer-motion';
import AboutSectionImg from '../../utils/images/about-section-img.jpg';

function AboutUsSection() {
  return (
    <div className="container my-5" style={{ backgroundColor: '#dbdbb2', padding: '2rem', borderRadius: '8px' }}>
        <div className="flex-column-reverse flex-lg-row row">
            <motion.div 
                className="col-lg-6 d-flex justify-content-center"
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img src={AboutSectionImg} className='about-section-img img-fluid mt-5 mt-lg-0 shadow' alt="about us" />
            </motion.div>
            <motion.div 
                className="col-lg-6 d-flex flex-column justify-content-center"
                initial={{ opacity: 0, x: 350 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className='text-uppercase fw-bold fs-1 mb-4 mb-lg-5'>O nama</h2>
                <p>Dobro došli u Avocado Breakfast & Brunch, vašu omiljenu destinaciju za savršen doručak i brunch u Beogradu! Naš moderan restoran kombinuje najsvežije sastojke sa kreativnim receptima kako bismo vam ponudili jedinstveno gastronomsko iskustvo.</p>
                <p>Naš restoran je idealno mesto za brz doručak pre posla, opušten brunch sa prijateljima ili porodični ručak. Ne čekajte - naručite svoje omiljene obroke i doživite savršen spoj ukusa i stilskog ambijenta!</p>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUsSection;