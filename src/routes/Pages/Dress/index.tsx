import dados from "../../../../db.json";
import type { TipoDress } from "../../../types/tipoDress";
import { useEffect, useState } from "react";

export default function Dress(){

    const [dress, setDress] = useState<TipoDress>();

    useEffect(() => {
        setDress(dados.dress[0]); 
    }, []);

    return(
        <main className="flex flex-col text-[var(--color-font-black)] max-w-7xl mx-auto px-4 py-10 leading-relaxed flex flex-col items-center gap-10">
            <div className="w-full md:max-w-xl max-w-sm">
                <h1 className="text-sm font-thin text-center">CLOTHING</h1>
                <h1 className="text-2xl font-semibold text-center mb-3">Dress code</h1>
                <p className="text-md font-normal">{dress?.texto}</p>
            </div>
            <img src={dress?.urlFoto} alt="Foto do estilo de roupa para o casamento" className="shadow-xl w-full md:w-1/4 max-w-sm h-auto border border-gray-300 rounded-lg object-cover"/>
        </main>
    );
} 