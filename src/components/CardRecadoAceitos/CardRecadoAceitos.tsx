import type { TipoRecadoAceito } from "../../types/tipoRecadoAceito";

export default function CardRecadoAceitos (props: {recadoAceitos: TipoRecadoAceito}) {
    return(
        <div className="flex flex-col items-center rounded-lg border-2 border-[var(--color-font-black)] p-6 gap-4">
            <h1 className="text-2xl font-medium">{props.recadoAceitos.nomeConvidados}</h1>
            <p className="text-[var(--color-2)] text-sm"> Mensagem: <span className="text-white font-medium">{props.recadoAceitos.mensagem}</span></p>
        </div>
    );
}

