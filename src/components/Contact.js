import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiCopy } from 'react-icons/bi';
import { fadeIn } from '../variants';
import Linkedin from '../assets/linkedin.png';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'matthewflaherty77@hotmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-60'>
          {/* Left: Heading */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='text-center lg:text-left'
          >
            <h4 className='text-xl uppercase text-red-400 font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none font-bold text-white'>
              Contact <br /> me!
            </h2>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='max-w-[400px] w-full'
          >
            <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300'>
              <div className='mb-6'>
                <h4 className='text-lg text-red-400 font-semibold mb-2'>Email</h4>
                <div className='flex items-center gap-1'>
                  <div className='bg-white/10 border border-white/20 rounded-lg px-3 py-2 w-3/4'>
                    <p className='text-white/90 text-sm select-all'>{email}</p>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className='bg-[#625dec] hover:bg-[#7a6ffb] text-white w-10 h-10 rounded-lg transition-colors duration-200 text-sm font-medium flex items-center justify-center'
                  >
                    {copied ? '✓' : <BiCopy size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <a
                  href='https://www.linkedin.com/in/matthewflaherty9/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block'
                >
                  <img
                    src={Linkedin}
                    alt='LinkedIn'
                    className='w-50 h-10 hover:scale-110 transition-transform duration-300'
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;