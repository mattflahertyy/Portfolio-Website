import React from 'react';
//images
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github2.png'
import PFP from '../assets/pfp.png';

const Header = () => {
  return (
      <header className='py-6'>
        <div className='w-full px-6'>
          <div className='flex justify-end items-center'>
            <div className="flex space-x-2 items-center">
              <a href='https://www.linkedin.com/in/matthewflaherty9/' className='flex-shrink-0'>
                <img src={Linkedin} width={100} height={75} alt="LinkedIn" className='object-contain hover:opacity-80 transition-opacity' />
              </a>
              <a href='https://github.com/mattflahertyy' className='flex-shrink-0'>
                <img src={Github} width={100} height={100} alt="GitHub" className='object-contain hover:opacity-80 transition-opacity' />
              </a>
              <img src={PFP} width={65} height={65} alt='Profile' className='rounded-full object-cover' />
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;