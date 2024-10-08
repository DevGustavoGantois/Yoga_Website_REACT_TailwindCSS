import React from 'react';

//import data
import { courses } from '../data';
//import icons
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

export function Courses() {
    return (
        <section className='section-sm lg:section-lg'>
            <div className="container mx-auto">
                <div className='text-center mb-16 lg:mb-32'>
                    <h2 className='h2 mb-3 lg:mb-[18px]'>Cursos Populares</h2>
                    <p className='max-w-[480px] mx-auto'>Pratique em qualquer lugar, a qualquer hora. Explore uma nova maneira de se exercitar e aprenda mais sobre você. Estamos proporcionando o melhor.</p>
                </div>
                <div data-aos="flip-left" data-aos-delay="200" className='flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14'>
                    {courses.map((item, index) => {
                        //destructure item
                        const {image, title, desc, link, delay} = item;
                        return (
                            <div className='w-full bg-white hover:shadow-primary max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] flex flex-col rounded-[14px] mx-auto transition' key={index}>
                                <div className='-mt-[38px] lg:-mt-[12px] mb-4 lg:mb-6'>
                                    <img src={image} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>{title}</h1>
                                    <p>{desc}</p>
                                </div>
                                <div className='flex items-center justify-between mt-8 mb-2 lg:mb-0'>
                                    <div className='flex text-orange gap-x-2'>
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarHalf />
                                    </div>
                                    <a className='font-medium' href="#">{link}</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-center'>
                    <button className='btn btn-sm btn-orange'>Ver todos</button>
                </div>
            </div>
        </section>
        
    )
}