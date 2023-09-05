'use client'

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";



export default function Avaliacoes () {

    return (
        <>
            {/* section 1 */}
            <section>
                <div className='flex flex-col items-center justify-start bg-[url("/texture3.jpg")] bg-cover bg-center min-h-[100vh] shadow-md'>
                    <Navbar typ={2}/>

                    <div className="flex flex-col gap-y-4 items-center justify-center mt-10">
                        <h1>Entre em contato comigo</h1>
                        <motion.a href='https://api.whatsapp.com/send/?phone=%2B5531981128561&text&type=phone_number&app_absent=0' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className='min-w-[300px] flex p-2 gap-x-2 bg-accent rounded-lg items-start justify-start pl-4 text-white font-medium shadow-md'>
                            <FaWhatsapp className='text-2xl'/>
                            <span>WhatsApp</span>  
                        </motion.a>
                        <motion.a href='https://www.instagram.com/tarologa_kelly13/' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className=' flex p-2 gap-x-2 min-w-[300px] bg-accent rounded-lg items-start justify-start pl-4 text-white font-medium shadow-md'>
                            <FaInstagram className='text-2xl'/>
                            <span>Instagram</span>  
                        </motion.a>
                        <motion.a href='mailto:tarologakelly@gmail.com' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className=' flex p-2 gap-x-2 min-w-[300px] bg-accent rounded-lg items-start justify-start pl-4 text-white font-medium shadow-md'>
                            <BiLogoGmail className='text-2xl'/>
                            <span>tarologakelly@gmail.com</span>  
                        </motion.a>
                    </div>

                </div>
            </section>

            {/* footer */}
            <footer>
                <div className='bg-[url("/texture3.jpg")] bg-cover bg-center flex flex-col items-center justify-center mt-1 shadow-md gap-2 relative py-6'>

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
        </>
    )
}