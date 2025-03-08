import React from 'react';
import './MenuSection.css';
import { motion } from 'framer-motion';
import dorucak from '../../utils/dorucak';
import avocadoToast from '../../utils/avocadoToast';
import salads from '../../utils/salads';
import bowls from '../../utils/bowls';
import snacks from '../../utils/snacks';
import burgers from '../../utils/burgers';
import juices from '../../utils/juices';
import smoothies from '../../utils/smoothies';
import desserts from '../../utils/desserts';

function MenuSection() {
  const menuCategories = [
    { title: 'Doručak', items: dorucak },
    { title: 'Avocado Toast', items: avocadoToast },
    { title: 'Salate', items: salads },
    { title: 'Bowl', items: bowls },
    { title: 'Snack', items: snacks },
    { title: 'Burger', items: burgers },
    { title: 'Cold Press Juices', items: juices },
    { title: 'Smoothie', items: smoothies },
    { title: 'Dezerti', items: desserts }
  ];

  return (
    <div className="menu-section py-5 text-light shadow">
      <div className="container">
        <div className="row g-4">
          {menuCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="menu-category p-4 h-100">
                <h3 className='fs-2 mb-4 fw-semibold text-uppercase'>{category.title}</h3>
                <ul className='px-0'>
                  {category.items.map((item) => (
                    <li key={item.id} className='d-flex justify-content-between mb-3'>
                      <p className='fs-5 me-3 text-capitalize fw-semibold'>{item.name}</p>
                      <p className='fs-5 text-success'>{item.price} RSD</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        </motion.div>
      </div>
    </div>
  )
}

export default MenuSection;