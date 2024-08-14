import React from 'react'
import Bitmap from '../assets/Bitmap.jpg'

const InteractiveVr = () => {
  return (
    <section className='mt-[98px] mx-[24px] '>
      <div>
        <img src={Bitmap} alt='Bitmap'/>
      </div>

      <div className='mt-[48px] '>
        <div>
          <h1 className='font-josefinSans font-light leading-[32px] uppercase text-black text-[32px] text-center'>The leader in interactive VR</h1>
          <p className='mt-[16px] font-alata font-normal leading[25px] text-black text-[15px] text-center opacity-50'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </div>      
    </section>
  )
}

export default InteractiveVr
