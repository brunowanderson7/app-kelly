'use client'

const services = {
    slides: [
        {
            images: [
                {
                    title: 'Abertura de caminhos amorosos',
                    path: '/img1.png',
                    description: 'Tira tudo que impede você de atrair um relacionamento',
                },
                {
                    title: 'Amor próprio',
                    path: '/img2.png',
                    description: 'Ajuda elevar a autoestima e remove bloqueios emocionais e espirituais',
                },
            ],
        },
        
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

        {
            images: [
                {
                    title: 'Adoçamento sexual',
                    path: '/img3.png',
                    description: 'Recupera a paixão do casal, aguça a paixão e a criatividade do casal',
                },
                {
                    title: 'Adoçamento amoroso',
                    path: '/img4.png',
                    description: 'Consiste em deixar o casal mais próximo e mais carinhoso entre si',
                },
            ],
        },

        {
            images: [
                {
                    title: 'Afastamento rival',
                    path: '/img5.png',
                    description: 'Retira aquela pessoa que está atrapalhando relacionamento de dar certo',
                },
                {
                    title: 'Chora aos meus pés',
                    path: '/img6.png',
                    description: 'Ideal para quem quer a pessoa caidinha e te obedencendo em tudo',
                },
            ],
        },
      ]
}


import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import Image from 'next/image'



export function Slider() {

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
                                            <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                                                <div className='flex items-center justify-center relative overflow-hidden group min-w-[316px] md:min-w-[424px] md:h-[164px] h-[120px] bg-white/30 rounded-lg'>
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