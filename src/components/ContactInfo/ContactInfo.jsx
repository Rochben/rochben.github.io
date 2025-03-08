import React from 'react';
import { motion } from 'framer-motion';

function ContactInfo() {
  return (
    <motion.div 
      className='d-flex flex-column align-items-center'
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
        <h2 className='fs-1 mb-2 fw-bold'>Kontakt</h2>
        <p className="m-0">
          <a 
            href="https://maps.app.goo.gl/yMAHKz4xaXi5amQb9"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Svetozara Markovića 38, Vračar
          </a></p>
          <p className="m-0">
          <a 
            href="https://maps.app.goo.gl/KwphsXLbHCToyjnVA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Đorđa Stanojevića 9b, Novi Beograd
          </a></p>
          <p className="m-0">
            <a 
              href="tel:+381601606070"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              +381 60 1606070
            </a>
          </p>
          <h2 className='fs-1 mb-2 fw-bold'>Radno vreme</h2>
        <p className="m-0">Pon - Sub: 08.00 - 20.00</p>
        <p>Ned: 08.00 - 16.00</p>
    </motion.div>
  )
}

export default ContactInfo;