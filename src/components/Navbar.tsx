interface NavbarProps {
    typ: number;
}


export function Navbar( { typ }: NavbarProps ) {
    return (
        <div className="bg-tertiary flex items-center justify-center p-4 gap-x-6 w-full md:max-w-[320px] text-[18px] font-medium md:mt-4 md:rounded-full shadow-md">

            <a href="/avaliacoes" className={`${typ == 1 && 'text-accent border-b-2 border-accent'} hover:text-accent`}>Avaliações</a>
            <a href="/contato" className={`${typ == 2 && 'text-accent border-b-2 border-accent'} hover:text-accent`}>Contato</a>
            <a href="/" className={`${typ == 3 && 'text-accent border-b-2 border-accent'} hover:text-accent`}>Home</a>

        </div>
    )
}