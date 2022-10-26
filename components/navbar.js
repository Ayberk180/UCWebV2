import { FaMosque } from 'react-icons/fa';
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from 'next/link';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 outline outline-teal-400">
          <div className="flex items-center justify-between w-11/12 h-16 mx-auto outline outline-orange-600">
            <div className="flex items-center flex-shrink-0">
              <FaMosque className='w-8 h-8 text-white' />
              <h1 className='ml-4 text-2xl text-white'>Ulu Cami</h1>
            </div>
            <div className="flex items-center outline outline-pink-400">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <Link href="/">
                    <a className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">                      
                      Home
                    </a>
                  </Link>

                  <Link href="/staff">
                    <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                      Staff
                    </a>
                  </Link>

                  <Link href="/services">
                    <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                      Services
                    </a>
                  </Link>

                  <Link href="/contact">
                    <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                      Contact
                    </a>
                  </Link>

                  <Link href="/donate">
                    <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                      Donate
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" >
                    <a onClick={() => setIsOpen(!isOpen)} className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">                      
                      Home
                    </a>
                  </Link>

                  <Link href="/staff" >
                    <a onClick={() => setIsOpen(!isOpen)} className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">
                      Staff
                    </a>
                  </Link>

                  <Link href="/services">
                    <a onClick={() => setIsOpen(!isOpen)} className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">
                      Services
                    </a>
                  </Link>

                  <Link href="/contact">
                    <a onClick={() => setIsOpen(!isOpen)} className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">
                      Contact
                    </a>
                  </Link>

                  <Link href="/donate">
                    <a onClick={() => setIsOpen(!isOpen)} className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700">
                      Donate
                    </a>
                  </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;

