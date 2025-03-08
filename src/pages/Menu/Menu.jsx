import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

function Menu() {
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
    <div className='menu-page'>
      <header className='height-50 mt-5'>
        <motion.div 
          className='container h-100 d-flex align-items-center justify-content-center'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>Menu</h1>
        </motion.div>
      </header>

      {menuCategories.map((category, index) => (
        <div key={category.title} className={`${index % 2 === 0 ? 'my-5' : 'bg-dark text-light py-5'}`}>
          <div className='container'>
            <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>{category.title}</h2>
            <div className={`row ${index % 2 === 0 ? 'flex-column-reverse flex-lg-row' : ''}`}>
              <motion.div 
                className='col-lg-6 d-flex flex-column justify-content-around'
                initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 350 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {category.items.map((item) => (
                  <div key={item.id}>
                    <Card className={`border-0 ${index % 2 === 0 ? '' : 'bg-dark text-light'}`}>
                      <CardBody>
                        <CardTitle className='text-center fs-3 text-capitalize'>
                          {item.name}
                        </CardTitle>
                        {item.description && (
                          <CardText className='text-center fs-5'>
                            {item.description}
                          </CardText>
                        )}
                        <CardText className='text-center fs-3 fw-bold text-success'>
                          {item.price} RSD
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </motion.div>
              <motion.div 
                className='col-lg-6 d-flex justify-content-center'
                initial={{ opacity: 0, x: index % 2 === 0 ? 350 : -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img 
                  src={`/images/${category.title.toLowerCase().replace(/\s+/g, '-')}-img.jpg`} 
                  className='img-fluid w-75 mt-4 mt-lg-0' 
                  alt={category.title}
                />
              </motion.div>
            </div>
          </div>
        </div>
      ))}

      <motion.div 
        className="container my-5 pt-5 d-flex justify-content-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to='/contact'>
          <button type='button' className='btn btn-success btn-lg rounded-0 text-capitalize mx-2 shadow'>Book your table</button>
        </Link>
      </motion.div>
    </div>
  )
}

export default Menu;