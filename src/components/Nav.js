import React from 'react';
// import icons
import { BiHomeAlt, BiUser, BiSolidGraduation, BiBulb } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
//add link
import { Link } from 'react-scroll';

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      {/* nav inner*/}
      <div className='w-full bg-black/20 h-[55px] backdrop-blur-2xl rounded-full max-w-[380px] mx-auto px-5 flex justify-between items-center text-2xl text-white'>
        <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[55px] h-[55px] flex items-center justify-center'>
          <BiHomeAlt />
        </Link>
        <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[55px] h-[55px] flex items-center justify-center'>
          <BiUser />
        </Link>
        <Link to='school' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[55px] h-[55px] flex items-center justify-center'>
          <BiSolidGraduation />
        </Link>
        <Link to='work' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[55px] h-[55px] flex items-center justify-center'>
          <BsBriefcase />
        </Link>
        <Link to='projects' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[55px] h-[55px] flex items-center justify-center'>
          <BsClipboardData />
        </Link>
        <Link to='skills' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[55px] h-[55px] flex items-center justify-center'>
          <BiBulb />
        </Link>
        <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[55px] h-[55px] flex items-center justify-center'>
          <BsChatSquareText />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;