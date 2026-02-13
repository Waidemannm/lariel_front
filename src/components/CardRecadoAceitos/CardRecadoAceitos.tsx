import type { TipoRecadoAceito } from "../../types/tipoRecadoAceito";

export default function CardRecadoAceitos (props: {recadoAceitos: TipoRecadoAceito}) {
    return(
        <div className="flex border-2 border-gray-200 w-200 rounded-xl flex-col p-5 break-words md:w-80">
            <h1 className="text-xl text-center font-bold">{props.recadoAceitos.nomeConvidados}</h1>
            <h2 className="text-[0.8rem] text-center font-medium">{props.recadoAceitos.dataMensagem}</h2>
            <p className="font-thin mt-3"> {props.recadoAceitos.mensagem}</p>
        </div>
    );
}

