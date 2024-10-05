import React from 'react';
import ContactForm from './Contactform'; // Assuming it's in the same folder

const ContactPage = () => {
  return (
    <div className=' bg-cyan-500 p-[4rem]'>
      <h1 className="text-center text-3xl font-bold">Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;

