import { useState } from "react";
import type { TipoConvidado } from "../../types/tipoConvidado";
import ConvidadoConfirmar from "../../components/ConvidadoConfirmar/ConvidadoConfirmar.tsx";
import ConvidadoAusente from "../ConvidadoAusente/ConvidadoAusente.tsx";

export default function CardConvidado(props: {convidado: TipoConvidado}){

    const [openConvidadoAtualizar, setOpenConvidadoAtualizar] = useState(false);

    return(
        <>{props.convidado.status == "C" ? 

        <div className="text-white bg-[var(--color-2)] flex flex-col rounded-lg border-2 border-[var(--color-2)] w-full md:w-80 items-center rounded-lg border-2 border-[var(--color-2)] p-6">
            <h1 className="text-2xl font-medium">{props.convidado.nomeConvidado}</h1>
            <div className="mt-3 text-white">
                <p className="text-sm">Presença já está confirmada</p>
            </div>
            <div className="md:flex md:gap-5">
                <div className="mt-8 flex justify-center gap-5 md:gap-8">
                <div className="text-gray-500 flex justify-center items-center rounded-xl border-2 border-gray-500 font-medium w-30 md:w-27 h-14 md:h-12">Confirmar</div>
                </div>
                <div className="mt-8 flex justify-center gap-5 md:gap-8">
                        <button className="text-white flex justify-center items-center cursor-pointer rounded-xl border-2 border-white font-medium w-30 md:w-27 h-14 md:h-12" onClick={() => setOpenConvidadoAtualizar(true)}>Ausente</button>
                        <ConvidadoAusente open={openConvidadoAtualizar} onClose={() => setOpenConvidadoAtualizar(false)} idConvidado={props.convidado.idConvidado}> </ConvidadoAusente>
                </div>
            </div>
            
        </div> : props.convidado.status == "A" ?

        <div className="text-white bg-[var(--color-2)] flex flex-col rounded-lg border-2 border-[var(--color-2)] w-full md:w-80 items-center rounded-lg border-2 border-[var(--color-2)] p-6">
            <h1 className="text-2xl font-medium">{props.convidado.nomeConvidado}</h1>
            <div className="mt-3 text-white">
                <p className="text-sm">Ausência</p>
            </div>
            <div className="md:flex md:gap-5">
                <div className="mt-8 flex justify-center gap-5 md:gap-8">
                    <button className="text-white flex justify-center items-center cursor-pointer rounded-xl border-2 border-white font-medium w-30 md:w-27 h-14 md:h-12" onClick={() => setOpenConvidadoAtualizar(true)}>Confirmar</button>
                    <ConvidadoConfirmar open={openConvidadoAtualizar} onClose={() => setOpenConvidadoAtualizar(false)} idConvidado={props.convidado.idConvidado}> </ConvidadoConfirmar>
                </div>
                <div className="mt-8 flex justify-center gap-5 md:gap-8">
                    <div className="text-gray-500 flex justify-center items-center rounded-xl border-2 border-gray-500 font-medium w-30 md:w-27 h-14 md:h-12">Ausente</div>
                </div>
            </div>
        </div> :

        <div className="text-white bg-[var(--color-2)] flex flex-col rounded-lg border-2 border-[var(--color-2)] w-full md:w-80 items-center rounded-lg border-2 border-[var(--color-2)] p-6">
            <h1 className="text-2xl font-medium">{props.convidado.nomeConvidado}</h1>
            <div className="mt-3 text-white">
                <p className="text-sm">Pendente</p>
            </div>
            <div className="md:flex md:gap-5">
                <div className="mt-8 flex justify-center gap-5 md:gap-8">
                    <button className="text-white flex justify-center items-center cursor-pointer rounded-xl border-2 border-white font-medium w-30 md:w-27 h-14 md:h-12" onClick={() => setOpenConvidadoAtualizar(true)}>Confirmar</button>
                    <ConvidadoConfirmar open={openConvidadoAtualizar} onClose={() => setOpenConvidadoAtualizar(false)} idConvidado={props.convidado.idConvidado}> </ConvidadoConfirmar>
                </div>
                <div className="mt-8 flex justify-center gap-5 md:gap-8">
                        <button className="text-white flex justify-center items-center cursor-pointer rounded-xl border-2 border-white font-medium w-30 md:w-27 h-14 md:h-12" onClick={() => setOpenConvidadoAtualizar(true)}>Ausente</button>
                        <ConvidadoAusente open={openConvidadoAtualizar} onClose={() => setOpenConvidadoAtualizar(false)} idConvidado={props.convidado.idConvidado}> </ConvidadoAusente>
                </div>
            </div>            
        </div>}</>
        
    );
}
