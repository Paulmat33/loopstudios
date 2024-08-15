import React from 'react'
import Logo from '../assets/loopstudios.svg'


const Header = () => {
  return (
    <section className="bg-hero-sm bg-cover bg-no-repeat md:bg-hero md:bg-cover md:bg lg:bg-cover">
      <div className='px-[24px] pt-[40px] pb-[163px] md:px-12 md:pt-16 md:pb-[100px] lg:px-[165px] lg:pt-[64px] '>
        <img src={Logo} alt='logo'/>
      </div>

      <div className='mx-6 pb-[227px] flex flex-col justify-center md:pb-[100px] md:px-8 lg:px-[140px] '>
        <h1 className='border-2 xs:text-[35px] font-light leading-[38px] text-grey py-[26px] px-[24px] font-josefinSans max-w-[327px] uppercase sm:text-[40px] md:py-[30px] lg:text-[72px] lg:leading-[70px] lg:p-10 lg:max-w-[650px] '>Immersive experiences that deliver</h1>
      </div>
    </section>
  )
}

export default Header
