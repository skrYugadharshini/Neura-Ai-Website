import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div>
                <img src={assets.logo_dark} alt="" />
                <p>Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.</p>

            </div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer