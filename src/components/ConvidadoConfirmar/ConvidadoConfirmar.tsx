import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL_API = import.meta.env.VITE_URL_API;

export default function ConvidadoConfirmar({open,  onClose, children, idConvidado}: {open: boolean; onClose: () => void; children: React.ReactNode; idConvidado: number}){

    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async () => {
        try{
            setLoading(true);
            const response = await fetch(`${URL_API}/convidados/status_update/${idConvidado}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Falha ao confirmar presença. O servidor está online?");
            }
            alert("Presença confirmada!");
            navigate(`/`);
            window.location.reload();
            setLoading(false);
        } catch (err) {
        alert("Falha ao confirmar presença!");
      } finally {
        setLoading(false);
      }
    };

    return(
        <>
            {loading && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60"><p className="text-white text-lg font-medium">Confirmando prenseça...</p></div>
            )}

            <div className={`fixed w-full md:mt-20 inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/90" : "invisible"}`}>
                <div className={`bg-white text-[var(--color-font-black)] rounded-lg shadow p-6 transition-all w-70 md:w-100 ${open ? "scale-100 opacity-100": "scale-110 opacity-0"}`} onClick={(e) => e.stopPropagation}>
                    <button className="absolute top-2 right-2 rounded-md text-blue-500 m-1" onClick={onClose}>Fechar</button> {children}
                    <h1 className="text-xl text-[var(--color-font-black)] font-medium text-center mt-10">Deseja confirmar presença?</h1>
                    <div className="flex justify-center m-5">
                        <button className="bg-[var(--color-2)] text-white cursor-pointer rounded-xl border-2 border-[var(--color-font-black)] font-medium w-20 md:w-25 h-13 md:h-12" onClick={handleSubmit} disabled={loading}>Confirmar</button>
                    </div>
                </div>
            </div>
        </>
    );
}