import React from 'react'

const Contact = () => {
  return (
    <div className='text-center p-6 py-20 lg-px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact  <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to make a Move? Let's Biuld Your Future Together</p>
 
 <form>
    <div>
       
        <div className='w-full md:w-1/2 text-left'>
            Your Name
        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" placeholder='Your Name' required/>
        </div>
    </div>
 </form>
    </div>
  )
}

export default Contact