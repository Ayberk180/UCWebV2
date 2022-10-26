import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '../components/modal'
import Navbar from '../components/navbar'
import mosque from '../images/blueMosque.jpg'

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Bismillah</h1>
      <div className='w-9/12 mx-auto'>
        <div className='flex flex-row justify-center p-8 shadow-lg md:justify-between rounded-xl bg-wisp-pink'>
          <div className='flex flex-col justify-center'>
            <p className='lg:text-5xl text-3xl font-semibold text-[#575a69]'>United Islamic Center</p>
            <p className='font-semibold lg:text-xl text-md'>408 Knickerbocker Ave </p>
            <p className='font-semibold lg:text-xl text-md'>Paterson, NJ 07503</p>
            <p className='font-semibold lg:text-xl text-md'>(973) 345-6584</p>        
          </div>
          <div className='hidden md:inline'>
            <Image className='' src={mosque} alt="There Should be a mosque here" />
          </div>
        </div>
        <div className='flex justify-center '>
          
        </div>
        <div className='flex flex-col items-center my-5 text-center '>
          <p className='text-3xl font-bold'>Announcements</p>
          <div className='w-3/4 '>
            <p>Youth Islam courses have begun! For Boys and Girls <strong>AGE 7 AND OLDER</strong> Our weekend Islam courses will consist of teaching students to read Quran, memorizing basic and advanced surahs, and the foundations of faith. Classes will be held on Saturdays and Sundays from 9am-1:30pm. </p>
          </div>
        </div>
        <div className='flex flex-col justify-center my-5 text-center'>
          <p className='justify-center text-3xl font-bold'>Our Mission</p>
          <p>United Islamic Center is dedicated to providing a safe environment for people to learn and worship in the name of Allah (saw) </p>
        </div>
        <div className='flex flex-col justify-center my-5 text-center'>
          <p className='justify-center text-3xl font-bold'>Services</p>
          <p>UIC provides numerous religious services for our muslim community. Learn more below!</p>
          <div>  
            <Link href='/services'>
              <button
                className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
                type="button">
                View Services
              </button>
            </Link>
          </div>
        </div>
        <div className='flex flex-col justify-center my-5 text-center'>
          <p className='justify-center text-3xl font-bold'>Donate</p>
          <p>Donations help UIC continue to provide vital services to keep our community together</p>
          <div>  
            <Link href='/donate'>
              <button
                className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
                type="button">
                Donate Today
              </button>
            </Link>
          </div>
        </div>
        <Modal />      
      </div>
    </div>
  )
}
