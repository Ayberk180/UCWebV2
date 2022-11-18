import React, { useState } from 'react'
import { FaAngleDown} from 'react-icons/fa';


function ServiceItem({title, body}) {

    const [open, setOpen] = useState(false)
    console.log(open)

    const toggle = () => {
        setOpen(!open);
      };

    
  return (
    <div className='flex flex-row justify-center p-6 m-5 shadow-lg md:justify-between rounded-xl bg-wisp-pink' onClick={toggle}>
        <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between w-full'>
                <p className='text-3xl font-semibold lg:text-5xl text-dark-gray'>{title}</p>
                <FaAngleDown className='w-8 h-8 text-dark-gray' />
            </div>
            {open && (
                <div>
                    <br />
                    <p>There will be some text here that describes the services offered under this category</p>
                    <p>{body}</p>  
                </div>
                )} 
        </div>
    </div>  
    )
}

export default ServiceItem