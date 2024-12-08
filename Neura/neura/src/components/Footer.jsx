import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.logo_dark} alt="" />
                    <p className='text-gray-400 mt-4'>Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.</p>

                </div>
                <div className='w-full md:w-1/5 mb-8 mb:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hver:text-white'>Home</a>
                        <a href="#About" className='hver:text-white'>About Us</a>
                        <a href="#Contact" className='hver:text-white'>Contact Us</a>
                        <a href="#" className='hver:text-white'>Privacy policy</a>

                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly</p>

                <div className='flex gap-2'>
                    <input type="email" placeholder="Enter your email" className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none md:w-auto'/>
                    <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                </div>

                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer