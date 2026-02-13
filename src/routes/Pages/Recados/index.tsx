import { useEffect, useState } from "react";
import CardRecadoAceitos from "../../../components/CardRecadoAceitos/CardRecadoAceitos";
import CardRecadoAddMensagem from "../../../components/CardRecadoAddMensagem/CardRecadoAddMensagem";
import type { TipoRecadoAceito } from "../../../types/tipoRecadoAceito";

const URL_API = import.meta.env.VITE_URL_API;

export default function Recados(){

    const [recadosAceitos, setrecadosAceitos] = useState<TipoRecadoAceito[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecadosAceitos = async () => {
        try {
            const response = await fetch(`${URL_API}/aceitos`);
            if (!response.ok) {
            throw new Error("Falha ao buscar os dados. O servidor está online?");
            }
            const data: TipoRecadoAceito[] = await response.json();
            setrecadosAceitos(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Um erro inesperado ocorreu.");
        } finally {
            setLoading(false);
        }
        };

        fetchRecadosAceitos();
    }, []);

    if (loading) {
        return (
        <main className="max-w-7xl mx-auto leading-relaxed p-8">
            <p className="text-center text-gray-600">Carregando recados...</p>
        </main>
        );
    }

    if (error) {
        return (
        <main className="max-w-7xl mx-auto leading-relaxed p-8">
            <div className="text-center text-red-700 bg-red-100 p-4 rounded-lg">
            <p>Erro: {error}</p>
            </div>
        </main>
        );
    }

    if (recadosAceitos.length === 0) {
        return (
        <main className="max-w-7xl mx-auto flex flex-col justify-center items-center leading-relaxed p-8 gap-10">
            <div className="flex justify-center">
                <CardRecadoAddMensagem/>
            </div>
            <p className="text-center text-[var(--color-font-black)]">Nenhum recado encontrado.</p>
        </main>
        );
    }
    return(
        <main className="max-w-7xl mx-auto flex flex-col justify-center leading-relaxed p-5 gap-10">
            <div className="flex justify-center">
                <CardRecadoAddMensagem/>
            </div>
            <div className="flex w-full flex-row flex-wrap justify-center gap-5">
                {recadosAceitos.map((recado) => (
                <CardRecadoAceitos recadoAceitos={recado} />
                ))}
            </div>
        </main>
    );
}