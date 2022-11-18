import React from 'react'

function ContactForm() {
  return (
    <section>
        <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-dark-gray">Contact Us</h2>
            <p className="mb-8 font-light text-center lg:mb-16 text-blue-magenta sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form action="#" className="space-y-8">
                <div>
                    <label className="block mb-2 text-sm font-medium text-blue-magenta">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-dark-gray text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-blue-magenta">Subject</label>
                    <input type="text" id="subject" className="block w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm text-dark-gray bg-gray-50 focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
                </div>
                <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-blue-magenta">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-dark-gray bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="px-5 py-3 text-sm font-medium text-center text-white transition-all duration-150 ease-linear rounded-lg bg-dark-gray hover:bg-dark-tan sm:w-fit">Send message</button>
            </form>
        </div>
    </section>
  )
}

export default ContactForm