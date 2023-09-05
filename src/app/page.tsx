'use client'

import { Navbar } from '@/components/Navbar'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { CgDanger } from 'react-icons/cg'
import Image from 'next/image'
import { Slider } from '@/components/Slider'
import { Iten } from '@/components/Iten'
import { motion } from 'framer-motion'
import { Oracles } from '@/components/Oracles'



export default function Home() {
  return (
    <main>
      {/* section 1 */}
      <section>
        <div className='flex flex-col items-center justify-start bg-gradient-to-r from-primary-200 via-primary-100 to-primary-200 min-h-[84vh] shadow-md'>
          <Navbar typ={3}/>

          <div className='mt-4 md:mt-8 lg:grid lg:grid-cols-2 flex flex-col-reverse items-center justify-center p-8 md:p-16'>

            {/* text */}
            <div className='flex flex-col items-center justify-center gap-y-4'>
              {/* title */}
              <h1 className='text-[28px] md:text-[32px] font-medium'>Taróloga Kelly</h1>

              {/* paragraph */}
              <p className='text-[18px] md:text-[22px] font-normal text-center'>
              Seja bem-vindo a um lugar onde o amor é desvendado pelas cartas. 
              Explore as respostas que o universo reserva para as questões do seu 
              coração e encontre a harmonia nos relacionamentos.
              </p>

              {/* button */}
              <div className='flex flex-col items-center justify-center'>
                
                <h2>Agende sua consulta agora mesmo</h2>
                <motion.a href='https://api.whatsapp.com/send/?phone=%2B5531981128561&text&type=phone_number&app_absent=0' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className=' flex p-2 gap-x-2 bg-accent rounded-lg items-center justify-center text-white font-medium shadow-md'>
                  <FaWhatsapp className='text-2xl'/>
                  <span>Quero agendar minha consulta</span>
                </motion.a>
              </div>
            </div>

            {/* image */}
            <div className='flex flex-col items-center overflow-hidden justify-center mb-8'>
              <div className='min-w-[216px] min-h-[242px] overflow-hidden rounded-[84px] shadow-md relative'>
                <div className='absolute w-[216px] h-[242px]'>
                  <Image src={'/avatar.png'} alt={'avatar'} fill objectFit="cover" />
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </section>


      {/* section 2 */}
      <section>
        <div className='bg-gradient-to-r from-primary-200 via-primary-100 to-primary-200 flex flex-col items-center justify-center mt-1 shadow-md'>
          {/* text */}
          <div className='flex flex-col items-center justify-center p-4 md:p-12'>
            {/* title */}
            <h1 className='text-[32px] md:text-[38px]'>Hoje é</h1>
            {/* subtitle */}
            <h2 className='text-[28px] md:text-[32px]'>provável que você</h2>
          </div>

          {/* itens */}
          <div className='flex flex-col gap-y-4 items-start justify-center p-4 md:px-12 lg:px-20'>
            
            <Iten title='Sinta duvidas e incertezas' path={2} />
            <Iten title='Sinta insegurança consigo mesma' path={2} />
            <Iten title='Sinta dificuldades em tomar decisões' path={2} />
            <Iten title='Sinta que falta algo na vida' path={2} />

          </div>

          {/* info */}
          <div className='flex flex-col items-center justify-center text-center mx-4 md:mx-10 gap-y-4 p-6 my-4 md:my-6 border border-black rounded-lg'>
            {/* icon */}
            <CgDanger className='text-4xl' />
            {/* text */}
            <p className='text-[18px] md:text-[20px]'>
            Saiba que esses problemas não estão em você, 
            existe uma motivo por trás de tudo isso
            </p>

          </div>

        </div>

      </section>

      {/* section 3 */}
      <section>

        <div className='bg-gradient-to-r from-primary-200 via-primary-100 to-primary-200 flex flex-col items-center justify-center mt-1 shadow-md'>

          {/* text */}
          <div className='flex flex-col text-center items-center justify-center p-6 md:p-12 gap-y-6'>
            {/* title */}
            <h2 className='text-[22px] md:text-[28px]'>Isso acontece porque até agora você seguiu perdido(a) sem um direcionamento </h2>
            <h3 className='text-[18px] md:text-[22px]'>Essa é a diferença que o direcionamento faz na sua vida</h3>
          </div>

          {/* itens */}
          <div className='flex flex-col gap-y-4 items-start justify-center p-4 md:px-12 lg:px-20'>

            <Iten title='Visão dos próximos acontecimentos' path={1} />
            <Iten title='Insights valiosos sobre suas relações, carreira, finanças' path={1} />
            <Iten title='Avaliar com firmezas atitudes a serem tomadas' path={1} />
            <Iten title='Superação de obstáculos' path={1} />

          </div>

          {/* button */}
          <div className='flex flex-col items-center justify-center my-6 md:my-8'>
                
            <h2>Não espere mais para mudar sua vida</h2>
            <motion.a href='https://api.whatsapp.com/send/?phone=%2B5531981128561&text&type=phone_number&app_absent=0' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className=' flex p-2 gap-x-2 bg-accent rounded-lg items-center justify-center text-white font-medium shadow-md'>
              <FaWhatsapp className='text-2xl'/>
              <span>Quero agendar minha consulta</span>
            </motion.a>
          </div>

        </div>

      </section>

      {/* section 4 */}
      <section>
        <div className='flex flex-col items-center justify-start shadow-md w-full min-h-[60vh] mt-1 bg-cover bg-center bg-gradient-to-r from-primary-200 via-primary-100 to-primary-200'>
          {/* text */}
          <div className=' flex flex-col text-center items-center justify-center p-6 md:p-12 gap-y-6 w-full'>
            {/* title */}
            <h2 className='text-[22px] md:text-[28px]'>Receba insigths valiosos</h2>
            <h3 className='text-[18px] md:text-[22px]'>Consulte os oráculos</h3>
          </div>

          {/* itens */}
          <div className='w-full xl:max-w-[65%] p-4 my-4'>
            <Oracles />

            {/* button */}
            <div className='flex flex-col items-center justify-center my-6 md:my-8'>
                
              <h2>Agende agora mesmo sua consulta</h2>
              <motion.a href='https://api.whatsapp.com/send/?phone=%2B5531981128561&text&type=phone_number&app_absent=0' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className=' flex p-2 gap-x-2 bg-accent rounded-lg items-center justify-center text-white font-medium shadow-md'>
                <FaWhatsapp className='text-2xl'/>
                <span>Quero agendar minha consulta</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section>
        <div className='flex flex-col items-center justify-start shadow-md w-full bg-[url("/bg.jpg")] min-h-screen bg-cover bg-center'>
          {/* text */}
          <div className='bg-black/30 flex flex-col text-center items-center justify-center p-6 md:p-12 gap-y-6 w-full text-white'>
            {/* title */}
            <h2 className='text-[22px] md:text-[28px]'>Sua vida amorosa merece o melhor sempre</h2>
            <h3 className='text-[18px] md:text-[22px]'>Veja algumas de nossas soluções</h3>
          </div>

          {/* itens */}
          <div className='w-full xl:max-w-[65%] p-4 my-4'>
            <Slider />

            {/* button */}
            <div className='flex flex-col items-center justify-center my-6 md:my-8'>
                
              <h2 className='text-white'>Agende agora mesmo sua consulta</h2>
              <motion.a href='https://api.whatsapp.com/send/?phone=%2B5531981128561&text&type=phone_number&app_absent=0' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className=' flex p-2 gap-x-2 bg-accent rounded-lg items-center justify-center text-white font-medium shadow-md'>
                <FaWhatsapp className='text-2xl'/>
                <span>Quero agendar minha consulta</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* section 6 */}
      <section>
        <div className='bg-gradient-to-r from-primary-200 via-primary-100 to-primary-200 flex flex-col items-center justify-center shadow-md'>
          {/* text */}
          <div className='flex flex-col text-center items-center justify-center p-6 md:p-12 gap-y-6'>
            {/* title */}
            <h2 className='text-[22px] md:text-[28px]'>Ainda tem duvidas?</h2>
            <h3 className='text-[18px] md:text-[22px]'>Tire um tempinho para ler as avaliações de nossos clientes que já teve suas vidas mudadas ou me pergunte diretamente e esclareça sua duvida.</h3>
          </div>

          {/* itens */}
          <div className='flex flex-col items-center justify-center gap-4'>

            {/* button */}
            <div className='flex flex-col items-center justify-center '>
                
              <h2>Avaliações</h2>
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href='/avaliacoes' className='flex p-2 gap-x-2 min-w-[180px] bg-accent rounded-lg items-center justify-center text-white font-medium shadow-md'>
                <span>Avaliações de clientes</span>
              </motion.a>
            </div>

            {/* button */}
            <div className='flex flex-col items-center justify-center mb-8'>
                
              <h2>Saiba mais</h2>
              <motion.a href='https://api.whatsapp.com/send/?phone=%2B5531981128561&text&type=phone_number&app_absent=0' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className=' flex p-2 gap-x-2 min-w-[180px] bg-accent rounded-lg items-center justify-center text-white font-medium shadow-md'>
                <FaWhatsapp className='text-2xl'/>
                <span>Tire sua duvida</span>  
              </motion.a>
            </div>

          </div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <div className='bg-gradient-to-r from-primary-200 via-primary-100 to-primary-200 flex flex-col items-center justify-center mt-1 shadow-md gap-2 relative py-6'>

          {/* ICONS */}
          <div className='flex items-center justify-center gap-4'>
            <a href="https://www.instagram.com/tarologa_kelly13/"><FaInstagram className='text-2xl hover:text-accent' /></a>
            <a href="href='https://api.whatsapp.com/send/?phone=%2B5531981128561&text&type=phone_number&app_absent=0'"><FaWhatsapp  className='text-2xl hover:text-accent' /></a>
          </div>

          {/* text */}
          <div className='flex flex-col items-center justify-center text-center text-[12px]'>
            <h2 className='uppercase'>taróloga Kelly © </h2>
            <h3>Todos os direitos reservados</h3>
          </div>

          <div className='absolute left-0 bottom-0'>
            <a href='https://www.linkedin.com/in/bruno-wanderson/' className='text-[10px] hover:text-accent'>DEV: Bruno Wanderson</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
