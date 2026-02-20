import {  FaInstagram } from 'react-icons/fa';
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
        <footer className='flex flex-col text-center gap-4 p-7 border-t border-gray-300 text-[var(--color-font-black)]'>
            <p>{casamento?.tituloRodape} - Todos os direitos reservados 2026 &copy;</p>
            <div className='flex justify-center gap-10 mt-5'>
               
                <Link target="_blank" rel="noopner noreferrer" to="https://www.instagram.com/lari.guiara/" aria-label="Instagram" className="flex items-center flex-col"  ><FaInstagram className="text-[1.2rem]" /><p>Larissa</p></Link>   
                <Link target="_blank" rel="noopner noreferrer" to="https://www.instagram.com/samuuel.barbosa/" aria-label="Instagram" className="flex items-center flex-col" ><FaInstagram className="text-[1.2rem]" /><p>Samuel</p></Link>

            </div>
            <div className='flex justify-center'>
                <Link className="text-[0.8rem]" to="/sobre">Sobre</Link>
            </div>
        </footer>
    );
}