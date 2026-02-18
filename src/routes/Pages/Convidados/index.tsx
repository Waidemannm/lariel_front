import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

const URL_API = import.meta.env.VITE_URL_API

export default function Convidados(){

    const { idConvite } = useParams<{ idConvite: string }>();
    const { nomeConvite } = useParams<{ nomeConvite: string }>();

   
        

    return( 
        <main className="max-w-7xl mx-auto leading-relaxed p-8 text-[var(--color-font-black)]">
            <Link to="/confirmar_presenca" className="fixed top-25 left-8 z-50 w-12 h-12  flex items-center justify-center rounded-full border-2 border-white bg-[var(--color-2)] backdrop-blur-sm text-white shadow-md transition-all duration-300  hover:scale-110 active:scale-95"><FiArrowLeft className="text-lg"/></Link>
          
        </main>
    );
}