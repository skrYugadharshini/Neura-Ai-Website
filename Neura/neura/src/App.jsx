import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonails from './components/Testimonails'



const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      
        <Header/>
          <About/>
          <Projects/>
          <Testimonails/>
          

          

    
        
      
    </div>
  )
}

export default App