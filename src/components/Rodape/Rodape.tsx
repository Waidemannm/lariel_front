import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { TipoCasamento } from "../../types/tipoCasamento";
import dados from "../../../db.json";

export default function Rodape(){

    const [casamento, setCasamento] = useState<TipoCasamento>();
    
    useEffect(() => {
        setCasamento(dados.casamento[0]); 
    }, []);

    return(
        <footer className='flex flex-col text-center gap-6 p-4 border-t border-gray-300 text-[var(--color-font-black)]'>
            <p>{casamento?.tituloRodape} - Todos os direitos reservados 2025 &copy;</p>
            <div className='flex justify-center gap-10'>
                <Link target="_blank" rel="noopner noreferrer" to="#" aria-label="Facebook" className="" ><FaFacebookF className="text-[1.2rem]" /></Link>
                <Link target="_blank" rel="noopner noreferrer" to="#" aria-label="Instagram" className="" ><FaInstagram className="text-[1.2rem]" /></Link>
                <Link target="_blank" rel="noopner noreferrer" to="#" aria-label="YouTUbe" className="" ><FaYoutube className="text-[1.2rem]" /></Link>
            </div>
            <div className='flex justify-center'>
                <Link className="text-[0.8rem]" to="/sobre">Sobre</Link>
            </div>
        </footer>
    );
}