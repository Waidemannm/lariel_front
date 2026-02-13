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

    return(
        <>
        {loading && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60">
            <p className="text-white text-lg font-medium">
            Salvando recado...
            </p>
        </div>
        )}

        <div className={`fixed inset-0 z-50 flex justify-center items-start md:items-center overflow-y-auto transition-opacity duration-300 ${
            open ? "opacity-100 bg-black/90" : "opacity-0 pointer-events-none"
            }`}>
            
                <div className={`relative bg-white text-[var(--color-font-black)] rounded-lg shadow p-6 w-[90%] max-w-lg my-10 transition-all duration-300 ${
                    open ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="absolute top-2 right-2 rounded-md text-blue-500 m-1" onClick={onClose}>
                    Fechar
                    </button>

                    <div className="flex flex-col gap-3 pl-4 mb-5 mt-10">
                        <h1 className="text-xl font-bold">Deixe seu recado no mural</h1>
                        <p className="text-sm text-gray-500">
                            Seu recado será visível para todos os visitantes do site após o casal aceitar.
                        </p>
                    </div>

                    <FormRecado register={register} onSubmit={onSubmit} />
                </div>
        </div>
        </>
    );
}