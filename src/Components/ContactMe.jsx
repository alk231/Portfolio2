import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const ContactMe=()=>{
  return (
      <div className="bg-black text-white py-20" id="Contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development prjectgs or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:youremail@example.com" className='hover:underline'>
                kumaralokown@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>9341810164</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>Karnataka,India</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
  <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
    <input type="hidden" name="access_key" value="90f5a76d-5f4d-4e98-984e-d9b6722fa9b9" />

    <div>
      <label htmlFor="name" className='block mb-2'>Your Name</label>
      <input type="text" 
             name="name" 
             className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' 
             placeholder='Enter Your Name' />
    </div>

    <div>
      <label htmlFor="email" className='block mb-2'>Email</label>
      <input type="email" 
             name="email" 
             className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' 
             placeholder='Enter Your Email' />
    </div>

    <div>
      <label htmlFor="message" className='block mb-2'>Message</label>
      <textarea name="message" 
                className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' 
                rows="5" 
                placeholder='Enter Your Message'></textarea>
    </div>

    <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
      Send
    </button>
  </form>

          </div>
        </div>
      </div>
    </div>

         
  )
}

export default ContactMe