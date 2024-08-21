import React from 'react';

//import icons
import { MdEmail } from 'react-icons/md';

export function Newsletter() {
    return (
        <section className='section-sm lg:section-lg bg-green min-h-[520px]'>
            <div className="container mx-auto">
                <div className='border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12' data-aos="fade-right">
                    <h1 className='text-[26px] text-white font-bold mb-[14px]'>Inscreva-se nossa Newsletter</h1>
                    <p className='text-green-200 mb-12'>Assine nossa newsletter para mais atualizações sobre nós</p>
                    <form className='max-w-[752px] mx-auto relative flex flex-col lg:flex-row gap-y-6 p-4 lg:p-0 gap-x-4'>
                        <div className='w-full relative flex'>
                            <div className='absolute left-2 h-full w-12 flex justify-center items-center text-2xl text-green-300'>
                            <MdEmail />
                            </div>
                            <input className='form-control w-full border border-green-300 bg-transparent outline-none placeholder:text-green-200 text-white pl-[60px]' placeholder='Digite seu email' type="email" />
                        </div>
                        <button className='btn btn-lg btn-orange text-white w-full lg:max-w-[180px]'>Comece agora</button>
                    </form>
                </div>
            </div>
        </section>
    )
}