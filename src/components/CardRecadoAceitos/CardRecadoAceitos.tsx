import type { TipoRecadoAceito } from "../../types/tipoRecadoAceito";

export default function CardRecadoAceitos (props: {recadoAceitos: TipoRecadoAceito}) {
    return(
    <div className="hover:-translate-y-1 transition-all duration-300 relative w-full rounded-2xl border border-black/10 bg-[#FFF8D6] pt-7 p-5 break-words">
       
        <div className="absolute top-3 left-1/2 -translate-x-1/2">
            <div className="w-4 h-4 rounded-full bg-[var(--color-2)] shadow-sm" />
        </div>

        <h1 className="text-lg font-semibold text-center">{props.recadoAceitos.nomeConvidados}</h1>
        <p className="text-xs text-center text-gray-600 mt-1">{props.recadoAceitos.dataMensagem}</p>

        <p className="mt-4 text-sm text-gray-800 font-light leading-relaxed whitespace-pre-line break-words">
            {props.recadoAceitos.mensagem}
        </p>
    </div>




    );
}

