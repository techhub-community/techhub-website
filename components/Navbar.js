import React from 'react'

const Navbar = ({ toggle }) => {
    return (
        <nav
            className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
            role='navigation'
        >
            <a href="/" className="pl-8">
            <img className="object-cover w-60" src="/assets/logo/logo-full-transparent.png"/>
            </a>
            <div className='px-4 cursor-pointer md:hidden'onClick={toggle}>
                <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </div>
            <div className='pr-8 md:block  hidden'>
                <a href='/' className='p-6'>
                    Home
        </a>
                
                <a href='/about' className='p-6'>
                    About
        </a>
                <a href='/contact' className='p-6'>
                    Contact
        </a>
            </div>
        </nav>
    )
}

export default Navbar
