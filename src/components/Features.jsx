// Import icons
import { BsPlayCircleFill } from "react-icons/bs";

export function Features() {
    return (
        <section className="bg-section min-h-[428px] pt-8 pb-[38px] lg:pb-[150px] mt-[120px] lg:mt-[130px]">
            <div className="container mx-auto">
                <div data-aos="fade-down"  className="bg-video h-[310px] bg-cover bg-center bg-no-repeat lg:h-[622px] w-full flex justify-center items-center rounded-md -mt-[150px] mb-[28px] lg:mb-20">
                    <div className="text-6xl lg:text-[120px] cursor-pointer hover:scale-110 text-orange transition">
                        <a href="https://www.youtube.com/watch?v=9MazN_6wdqI" target="_blank"><BsPlayCircleFill /></a>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="200" className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-8">
                    <div className="flex-1 flex flex-col">
                        <div className="w-9 h-[2px] bg-orange mb-2 lg:w-[70px] rounded-full"></div>
                        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                            <h1 className="h2 mb-3 lg:mb-0">
                                A melhor maneira de <br />
                                Começar Yoga
                            </h1>
                            <div className="flex flex-col justify-between">
                                <p className="max-w-[360px] mb-[18px] lg:mb-[38px]">
                                    Pratique em qualquer lugar, a qualquer hora. Explore uma nova maneira de se exercitar e
                                    aprenda mais sobre você. Estamos proporcionando o melhor.
                                </p>
                                <button className="w-[200px] btn btn-sm btn-orange mt-2 lg:mt-4">
                                    Começar agora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
