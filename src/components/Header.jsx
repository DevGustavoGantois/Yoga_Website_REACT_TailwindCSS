import React, { useState, useEffect } from 'react';

// Import components
import { Nav } from './Nav';
import { NavMobile } from './NavMobile';

// Import logo
import Logo from '../assets/img/logo.png';

export function Header() {
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 36 ? setHeader(true) : setHeader(false);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                header ? 'top-0' : 'top-9'
            } fixed bg-white w-full max-w-[100vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}
        >
            <div className='flex items-center'>
                <a href="#">
                    <img src={Logo} alt="Logo" />
                </a>
                <div className='hidden lg:flex'>
                    <Nav />
                </div>
            </div>
            <div className='flex items-center'>
                <div className='flex gap-x-4 lg:gap-x-9'>
                    <button className='text-heading font-medium text-sm lg:text-base hover:text-orange transition'>
                        Entrar
                    </button>
                    <button className='btn btn-md lg:px-[30px] bg-orange-100 border border-orange font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-white transition'>
                        Inscreva-se
                    </button>
                </div>
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </header>
    );
}
