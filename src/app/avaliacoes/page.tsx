import { Navbar } from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";



export default function Avaliacoes () {

    return (
        <>
        {/* section 1 */}
        <section>
            <div className='flex flex-col items-center justify-start bg-primary min-h-[100vh] shadow-md'>
                <Navbar typ={1}/>

                <div className="w-full mt-10">
                    <Testimonials />
                </div>

            </div>
        </section>


        {/* footer */}
        <footer>
            <div className='bg-primary flex flex-col items-center justify-center mt-1 shadow-md gap-2 relative py-6'>

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