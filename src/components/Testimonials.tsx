'use client'

const testimonialData = [
    {
      image: '/avt-profile.png',
      position: 'Cliente',
      message:
        'Sou grata a sua espiritualidade por você ter aparecido, já fui muito enganada por pessoas mal intencionadas, estou feliz com o resultado, principalmente o do adoçamento, sem isso eu e ele estariamos sem se falar até hoje, você é demais',
    },
    {
      image: '/avt-profile.png',
      position: 'Cliente',
      message:
        'Queria te dizer que no dia seguinte mesmo eu recebi um pagamento que já estava aguardando e não sabia nem quando ia receber. Queria agradecer pela sua mão maravilhosa para os rituais',
    },
    {
        image: '/avt-profile.png',
        position: 'Cliente',
        message:
          'Kelly, passando aqui para falar do trabalho que você fez para mim e que não foi nem três dias meu esposo colocou um motorista porque eu não queria que ele fosse, pois seu trabalho deu super certo, obrigada por existir na minha vida',
      },
];

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import Image from 'next/image'
import { FaQuoteLeft } from "react-icons/fa";



export function Testimonials() {

    return (
        <Swiper pagination={{clickable: true}} modules={[Pagination]} className="h-[500px] md:h-[600px]" >

            {
                testimonialData.map((testimonial, index) => {
                    return (
                        <SwiperSlide key={index} >
                            <div className='flex flex-col md:flex-row  items-center gap-x-8 h-full px-16'>
                                {/* avatar  */}
                                <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                                    <div className='flex flex-col justify-center text-center'>
                                        <div className='mb-2 mx-auto'>
                                            <Image src={testimonial.image} alt='avatar' width={100} height={100} className='rounded-full' />
                                        </div>
                                        <div className='text-[12px] uppercase font-extralight tracking-widest'>
                                            {testimonial.position}
                                        </div>
                                    </div>
                                </div>

                                {/* mensage */}
                                <div className='flex flex-1 flex-col justify-center items-center before:w-[1px] xl:before:bg-white/80 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                                    {/* icon */}
                                    <div className='mb-4'>
                                        <FaQuoteLeft className='text-4xl xl:text-6xl text-black/80 mx-auto md:mx-0' />
                                    </div>

                                    {/* message */}
                                    <div className='xl:text-lg text-center md:text-left '>
                                        {testimonial.message}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }   
        </Swiper>
    )
}