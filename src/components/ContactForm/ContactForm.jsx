import React from 'react';
import './ContactForm.css';
import { motion } from 'framer-motion';

function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Form content will be added here later */}
        </motion.div>
    )
}

export default ContactForm;