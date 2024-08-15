import React from 'react'
import Logo from '../assets/loopstudios.svg'


const Header = () => {
  return (
    <section className="bg-hero-sm bg-cover bg-no-repeat bg-grey ">
      <div className='px-[24px] pt-[40px] pb-[163px] '>
        <img src={Logo} alt='logo'/>
      </div>

      <div className='pl-[24px] pb-[227px] '>
        <h1 className='border-2 text-[40px] font-light leading-[38px] text-grey py-[26px] px-[24px] font-josefinSans uppercase'>Immersive experiences that deliver</h1>
      </div>
    </section>
  )
}

export default Header
