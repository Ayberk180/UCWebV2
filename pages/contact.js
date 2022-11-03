import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div className='w-9/12 mx-auto'>
        <div className='flex flex-row justify-center p-6 shadow-lg md:justify-between rounded-xl bg-wisp-pink mt-10'>
          <div className='flex flex-col justify-center'>
            <p className='text-3xl font-semibold lg:text-5xl text-dark-gray'>United Islamic Center</p>
            <p className='font-semibold lg:text-xl text-md'>408 Knickerbocker Ave </p>
            <p className='font-semibold lg:text-xl text-md'>Paterson, NJ 07503</p>
            <p className='font-semibold lg:text-xl text-md'>(973) 345-6584</p> 
              <a
                className="w-fit px-4 py-3 mt-4 text-sm font-bold text-white transition-all duration-150 ease-linear bg-tan rounded shadow outline-none active:bg-dark-tan hover:shadow-lg focus:outline-none"
                type="button"
                href='https://goo.gl/maps/8sojhhq7aPCXbmZt7'
                target="_blank"
                rel="noopener noreferrer">
                View on Google Maps
              </a>      
          </div>
        </div>
    </div>
  )
}

export default Contact