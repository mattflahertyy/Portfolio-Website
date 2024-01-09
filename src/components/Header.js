import React from 'react';
//images
import Logo from '../assets/logo2.png'
import {Link} from "react-scroll";

const Header = () => {
  return (
      <header className='py-8'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            {/* logo */}
            <a href='#'>
              <img src={Logo} width={180} height={100}></img>
            </a>
            {/* button */}

            <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer'>
              <button className='btn btn-sm'>Contact me</button>
            </Link>
          </div>
        </div>
      </header>
  );
};

export default Header;