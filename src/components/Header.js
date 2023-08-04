import React from 'react';
//images
import Logo from '../assets/Logo.jpg'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} width={100} height={100}></img>
          </a>
          {/* button */}
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
