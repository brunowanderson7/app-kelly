'use client'

const services = {
    slides: [
        
        {
            images: [
                {
                    title: 'Jogo de buzios',
                    path: '/img7.png',
                    description: 'Orienta e mostra o caminho a seguir, trazendo respostas para suas dúvidas',
                },
                {
                    title: 'Baralho de tarot',
                    path: '/img8.png',
                    description: 'Ajudam no processo de autoconhecimento e apontam alguns caminhos',
                },
            ],
        },
    ],
}


import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import Image from 'next/image'



export function Oracles() {

    return (

        <Swiper spaceBetween={10} pagination={{clickable: true}} modules={[Pagination]} className="h-[300px] md:h-[400px]" >

            {
                services.slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index} >
                            <div className="grid grid-rows-2 gap-4 cursor-pointer">
                                {
                                    slide.images.map((image, imgIndex) => {
                                        return (
                                            <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={imgIndex}>
                                                <div className='flex items-center justify-center relative overflow-hidden group min-w-[316px] md:min-w-[424px] md:h-[164px] h-[120px] bg-white/20 shadow-md rounded-lg'>
                                                    <div className="w-[120px] h-[120px] md:w-[164px] md:h-[164px] absolute left-0">
                                                        <Image src={image.path} alt={image.title} fill objectFit="cover" />
                                                    </div>

                                                    {/* text */}
                                                    <div className="absolute left-[120px] md:left-[164px]">
                                                        <h1 className="text-[16px] text-center md:text-[22px] font-medium">{image.title}</h1>
                                                        <p className="text-[14px] p-2 md:text-[18px] font-normal">{image.description}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}