import React, {useState} from 'react';

//import data
import {pricing} from '../data';

import {FaChevronRight} from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';

export function Pricing() {

    const [index, setIndex] = useState(0);

    return (
        <section className="section-sm lg:section-lg bg-section">
            <div className="container mx-auto" >
                <div data-aos="fade-down" data-aos-delay="200" className='text-center mb-7 lg:mb-[70px]'>
                    <h2 className='h2 mb-3 lg:mb-[18px]'>Escolha um plano de preços</h2>
                    <p className='max-w-[398px] mx-auto'>Escolha um plano de preços e comece sua jornada conosco para construir seu corpo e mente.</p>
                </div>
                <div data-aos="fade-left" data-aos-delay="200" className='flex flex-col mx-auto items-center gap-y-5 lg:flex-row lg:gap-x-[33px]'>
                    {pricing.map((card, currentIndex) => {
                        //destructure card
                        const {title, price, list, buttonIcon, buttonText, delay} = card;
                        return (
                            <div onClick={() => setIndex(currentIndex)} className='bg-white w-full max-w-[386px] min-h-[668px] h-full cursor-pointer relative' key={currentIndex}>
                                <div className={`${index === currentIndex ? 'bg-orange text-white': 'bg-white text-heading'} text-center pt-[70px] pb-[34px] border-b border-stroke-3 transition`}>
                                    <div className='text-[24px] font-medium mb-[10px]'>{title}</div>
                                    <div className='text-[34px] font-semibold'>{price}</div>
                                </div>
                                <div className='px-[30px] pt-[18px] pb-[30px]'>
                                    <p className='text-center mb-6 text-sm'>Descubra sua turma favorita!</p>
                                    <ul className=' flex flex-col gap-3 mb-10'>
                                        {list.map((item, index) => {
                                            //destructure item
                                            const {icon, name} = item;
                                            return <li className='border border-stroke-3 p-4 rounded-md flex items-center gap-4' key={index}>
                                                <div className='flex justify-center items-center bg-green-100 w-7 h-7 text-2xl rounded-full'><BsCheck /></div>
                                                {name}
                                            </li>
                                        })}
                                    </ul>
                                    <div className='absolute bottom-[30px] w-full left-0 right-0 px-[30px]'>
                                    <button className={`${index === currentIndex ? 'bg-orange text-white' : 'border-orange'} w-full h-[50px] rounded border border-orange flex items-center justify-center text-orange font-medium transition relative`}>{buttonText}
                                    <div className={` ${index === currentIndex ? 'bg-orange-200' : 'bg-orange'} w-[50px] h-[50px] flex justify-center items-center absolute right-0 rounded text-white`}><FaChevronRight /></div>
                                    </button>
                                    </div>
    
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}