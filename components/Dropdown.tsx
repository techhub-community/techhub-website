import React from 'react'

const Dropdown = ({ isOpen, toggle }) => {
    return (
      <div
        className={
          isOpen
            ? 'grid grid-rows-4 text-center items-center bg-black-900 text-black-50'
            : 'hidden'
        }
        onClick={toggle}
      >
        <a href='/' className='p-4'>
          Home
        </a>
        <a href='/about' className='p-4'>
          About
        </a>
        <a href='/contact' className='p-4'>
          Contact
        </a>
      </div>
    );
  };
  
export default Dropdown
