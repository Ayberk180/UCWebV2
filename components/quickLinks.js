import Link from 'next/link'
import React from 'react'

export default function QuickLinks() {
  return (
    <div className='flex flex-col my-8'>
        <p className='mb-5 text-2xl font-bold text-blue-magenta'>Quick Links</p>
        <div className='grid grid-cols-4 justify-items-center space-between'>
            <Link href={'/contact'}>
                <div className='flex flex-col justify-center w-10/12 p-4 m-2 shadow-md rounded-2xl hover:shadow-2xl bg-wisp-pink'>
                    <p className='text-2xl font-semibold text-center text-blue-magenta'>Contact</p>
                    <p className='text-center text-dark-gray hidden lg:inline'>This is a test for the thing testing</p>
                </div>
            </Link>
            <Link href={'/services'}>
                <div className='flex flex-col justify-center w-10/12 p-4 m-2 shadow-md rounded-2xl hover:shadow-2xl bg-wisp-pink'>
                    <p className='text-2xl font-semibold text-center text-blue-magenta'>Services</p>
                    <p className='text-center text-dark-gray hidden lg:inline'>This is a test for the thing testing</p>
                </div>
            </Link>
            <Link href={'/staff'}>
                <div className='flex flex-col justify-center w-10/12 p-4 m-2  shadow-md rounded-2xl hover:shadow-2xl bg-wisp-pink'>
                    <p className='text-2xl font-semibold text-center text-blue-magenta'>Staff</p>
                    <p className='text-center text-dark-gray hidden lg:inline'>This is a test for the thing testing</p>
                </div>
            </Link>
            <Link href={'/donate'}>
                <div className='flex flex-col justify-center w-10/12 p-4 m-2 shadow-md rounded-2xl hover:shadow-2xl bg-wisp-pink'>
                    <p className='text-2xl font-semibold text-center text-blue-magenta'>Donate</p>
                    <p className='text-center text-dark-gray hidden lg:inline'>This is a test for the thing testing</p>
                </div>
            </Link>
        </div>
    </div>
  )
}
