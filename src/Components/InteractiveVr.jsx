import React from 'react'
import Bitmap from '../assets/Bitmap.jpg'

const InteractiveVr = () => {
  return (
    <section className='pt-[98px] mx-[24px] md:px-9 lg:pt-[160px] lg:mx-[140px] lg:flex lg:flex-row'>
      <div className='lg:relative'>
        <img src={Bitmap} alt='Bitmap'/>
      </div>

      <div className='mt-[48px] md:mt-[40px] lg:max-w-[541px] lg:absolute lg:right-0 lg:left-[750px] lg:top-[905px]  '>
        <div className='lg:pt-[96px] lg:pl-[96px] lg:bg-white '>
          <h1 className='font-josefinSans font-light leading-[32px] uppercase text-black text-[32px] text-center md:text-[35px] lg:text-[48px] lg:leading-[48px] lg:w-[445px] lg:text-left'>The leader in interactive VR</h1>
          <p className='mt-[16px] font-alata font-normal leading[25px] text-black text-[15px] text-center opacity-50 md:text-[20px] lg:text-[15px] lg:text-left lg:w-[445px] '>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </div>      
    </section>
  )
}

export default InteractiveVr
