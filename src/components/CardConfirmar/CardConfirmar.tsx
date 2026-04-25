import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormConfirmar from "../FormConfirmar/FormConfirmar";
import type { TipoConfirmar } from "../../types/tipoConfirmar";

const URL_API = import.meta.env.VITE_URL_API;

export default function CardConfirmar({open,  onClose, children, }: {open: boolean; onClose: () => void; children: React.ReactNode; }){


    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<TipoConfirmar>();
    const [loading, setLoading] = useState(false);

    const onSubmit = handleSubmit(async (data) => {
        try {
            setLoading(true);
            const response = await fetch(`${URL_API}/convites/${data.nomeConvite}/${data.idConvite}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            if (!response.ok) {
                throw new Error("Falha ao buscar convidados. Verifique O ID e o nome do convite.");
            }

            navigate(`/convidados_presenca/${data.nomeConvite}/${data.idConvite}`);
            window.location.reload();
        } catch {
            alert("Falha ao buscar convidados. Verifique O ID e o nome do convite.");
            navigate("/convidados_presenca");
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
                Buscando convidados...
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
                                Busque o convite pelo ID e nome do convite para confirmar presença dos convidados.
                            </p>
                        </div>

                        <FormConfirmar register={register} onSubmit={onSubmit} />
                    </div>
            </div>
        </>
    );
}