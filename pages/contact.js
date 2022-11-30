import Link from 'next/link'
import React from 'react'
import ContactForm from '../components/contactForm'

function Contact() {
  return (
    <div className='w-9/12 mx-auto shadow-lg rounded-xl bg-wisp-pink lg:flex lg:flex-row lg:justify-center'>
        <div className='flex flex-row items-center justify-center px-2 pt-6 md:justify-between '>
          <div className='flex flex-col items-center mx-auto lg:mx-6 lg:justify-left lg:items-start'>
            <p className='text-3xl font-semibold text-center md:text-left lg:text-5xl text-dark-gray'>United Islamic Center</p>
            <p className='font-semibold lg:text-xl text-md'>408 Knickerbocker Ave </p>
            <p className='font-semibold lg:text-xl text-md'>Paterson, NJ 07503</p>
            <p className='font-semibold lg:text-xl text-md'>(973) 345-6584</p> 
              <a
                className="px-4 py-3 mt-4 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none w-fit bg-dark-gray hover:bg-dark-tan hover:shadow-lg focus:outline-none"
                type="button"
                href='https://goo.gl/maps/8sojhhq7aPCXbmZt7'
                target="_blank"
                rel="noopener noreferrer">
                View on Google Maps
              </a>      
          </div>
        </div>
        <ContactForm />
    </div>
  )
}

export default Contact