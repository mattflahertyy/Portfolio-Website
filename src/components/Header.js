import React from 'react';
//images
import Logo from '../assets/logo2.png'
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github2.png'
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
              <div className="flex space-x-10 items-center">
                  <a href='https://github.com/mattflahertyy'>
                      <img src={Github} width={100} height={100}></img>
                  </a>
                  <a href='https://www.linkedin.com/in/matthewflaherty9/'>
                      <img src={Linkedin} width={100} height={75}></img>
                  </a>
                      {/* button */}
                  <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer'>
                      <button className='btn btn-sm'>Contact me</button>
                  </Link>
              </div>

          </div>
        </div>
      </header>
  );
};

export default Header;