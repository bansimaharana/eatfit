import React, { useState } from 'react';

const ContactForm = () => {
  // State to store form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to store any success or error messages
  const [messageStatus, setMessageStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add form validation or send data to an API endpoint
    if (formData.name && formData.email && formData.message) {
      // Mock successful form submission
      setMessageStatus('Your message has been sent!');
      console.log('Form Data Submitted:', formData);

      // Clear form data
      setFormData({ name: '', email: '', message: '' });
    } else {
      setMessageStatus('Please fill in all fields.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 backdrop-blur-sm border-spacing-1 borde p-4 rounded-2xl ">
      

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder=" Enter Your Name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Your Email"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Your Message"
            rows="5"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </form>

      {/* Success or Error Message */}
      {messageStatus && <p className="mt-4 text-sm text-red-500">{messageStatus}</p>}
    </div>
  );
};

export default ContactForm;

