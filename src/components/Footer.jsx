import React from 'react';

//import logo
import Logo from '../assets/img/logo.png';

//import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className='pb-[70px]'>
            <div className="container mx-auto">
                <div data-aos="fade-down" data-aos-delay="200" className='flex flex-col justify-between items-center lg:flex-row gap-y-5'>
                    <a href="#">
                        <img src={Logo} alt="" />
                    </a>
                    <p>&copy; 2024. Todos os Direitos Reservados.</p>
                    <div className='flex  text-orange text-lg'>
                        <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
                            <FaYoutube/>
                        </div>
                        <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
                            <FaInstagram/>
                        </div>
                        <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
                            <FaGithub/>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                <a data-aos="fade-up" data-aos-delay="400" className=' text-paragraph transition-all hover:text-orange' href="" target='_blank'>Desenvolvido por <br /> @devgustavogantois_</a>
                </div>
            </div>
        </footer>
    )
}