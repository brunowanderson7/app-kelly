import { FaCheck } from 'react-icons/fa';
import { FiX } from  'react-icons/fi';

interface ItenProps {
    title: string;
    path: number;
}

export function Iten({ title, path }: ItenProps) {
    return (
        <div className='flex gap-x-2 items-center justify-center'>
            <div className={`${path === 1 ? 'bg-accent' : 'bg-red-500'} min-w-[32px] h-8 rounded-full flex items-center text justify-center`}>
                {path === 1 ? <FaCheck className='text-white text-xl' /> : <FiX className='text-white text-2xl font-bold' />}
            </div>
            <h2 className='text-[18px] md:text-[20px]'>{title}</h2>
        </div>
    )
}