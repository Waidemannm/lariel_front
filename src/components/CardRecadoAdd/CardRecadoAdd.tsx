import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { TipoSalvarRecado } from "../../types/tipoSalvarRecado";
import FormRecado from "../FormRecado/FormRecado";

const URL_API = import.meta.env.VITE_URL_API;

export default function CardRecadoAdd({open,  onClose, children, }: {open: boolean; onClose: () => void; children: React.ReactNode; }){


    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<TipoSalvarRecado>();
    const [loading, setLoading] = useState(false);

    const onSubmit = handleSubmit(async (data) => {
        
        try {
            setLoading(true);

            const response = await fetch(`${URL_API}/pendentes`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Falha ao salvar dados do recado.");
            }

            alert("Recado salvo com sucesso!");
            navigate("/mural_recados");
            window.location.reload();
        } catch {
            alert("Falha ao salvar recado!");
            navigate("/mural_recados");
            window.location.reload();
        } finally {
            setLoading(false);
        }
    });

    if (loading) {
        return (
        <main className="max-w-7xl mx-auto leading-relaxed">
            <div className={`fixed w-full inset-0 flex justify-center items-center transition-colors${open ? "visible bg-black/90" : "invisible"}`}><p className="text-center text-white mt-10">Salvando recado...</p></div>
        </main>
        );
    }

    return(
        <div className={`fixed mt-15 w-full inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/90" : "invisible"}`}>
           <div className={`bg-white text-[var(--color-font-black)] rounded-lg shadow p-6 transition-all w-70 md:w-100 ${open ? "scale-100 opacity-100": "scale-110 opacity-0"}`} onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 rounded-md text-blue-500 m-1" onClick={onClose}>Fechar</button> {children}
            <div className="flex flex-col gap-3 pl-4 mb-5 mt-10">
                <h1 className="text-xl font-bold ">Deixe seu recado no mural</h1>
                <p className="text-sm text-gray-500">Seu recado será visível para todos os visitantes do site após o casal aceitar.</p>
            </div>
            <FormRecado register={register} onSubmit={onSubmit}/>
           </div>
        </div>
    );
}