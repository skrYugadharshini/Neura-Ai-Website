import React from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects 
            <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

        {/*slider*/}

        <div className='flex justify-end items-center mb-8'>
            <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Projects'>
                <img src={assets.left_arrow} alt="Previous" />
            </button>

            <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Projects'>
                <img src={assets.right_arrow} alt="Next" />
            </button>

        </div>
       
        {/*project slider container*/}

        <div>
            <div>
               {projectsData.map((project,index)=>(
                <div key={index}>
                    <img src={project.image} alt={project.title} />
                
                </div>
               ))} 
            </div>
        </div>



    </div>
  )
}

export default Projects