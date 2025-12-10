import dados from "../../../../db.json";
import { useEffect, useState } from "react";
import type { TipoHistoria } from "../../../types/tipoHIstoria";

export default function Historia(){

    const [historia, setHistoria] = useState<TipoHistoria>();

    useEffect(() => {
        setHistoria(dados.nossaHistoria[0]); 
    }, []);

    return(
        <main className="flex flex-col text-[var(--color-font-black)] max-w-7xl mx-auto px-4 py-10 leading-relaxed flex flex-col items-center gap-10">
            <div className="w-full md:max-w-xl max-w-sm">
                <h1 className="text-sm font-thin text-center">HISTÓRIA DO CASAL</h1>
                <h2 className="text-2xl font-semibold mb-3 text-center">Nossa história</h2>
                <p className="text-md font-normal">{historia?.texto}</p> 
            </div>
            <img src={historia?.urlFoto} alt="Foto do casal" className="shadow-xl w-full md:w-1/4 max-w-sm h-auto border border-gray-300 rounded-lg object-cover"/>
        </main>
    );
}