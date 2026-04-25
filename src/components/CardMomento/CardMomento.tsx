import type { TipoMomento } from "../../types/tipoMomento";
import foto from "../../images/Momentos/foto1.webp";

export default function CardMomento (props:{momento:TipoMomento}) {
    return(
        <div className="flex flex-col items-center p-10 gap-5">
            <p className="text-md font-medium">{props.momento.textoFoto}</p>
            <img src={foto} alt="Foto de um momento do casal" className="shadow-xl w-full md:w-1/2 max-w-sm h-auto border border-gray-300 rounded-lg object-cover"/>
        </div>
    );
}; 