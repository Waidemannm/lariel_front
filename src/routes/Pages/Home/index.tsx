import CardRecadoAddMensagem from "../../../components/CardRecadoAddMensagem/CardRecadoAddMensagem";
import foto from "../../../images/Home/fotoInicial.webp";
import dados from "../../../../db.json"
import { useEffect, useMemo, useState } from "react";
import type { TipoCasamento } from "../../../types/tipoCasamento";

export default function Home(){

    const [casamento, setCasamento] = useState<TipoCasamento>();
    useEffect(() => {
        setCasamento(dados.casamento[0]); 
    }, []);

    const casamentoDate = new Date("2026-08-01T15:30:00-03:00");

    function pad2(n: number) {
        return String(n).padStart(2, "0");
    }

    function getCountdown(target: Date) {
        const now = Date.now();
        const diffMs = target.getTime() - now;

        if (diffMs <= 0) {
            return { ended: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const totalSeconds = Math.floor(diffMs / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { ended: false, days, hours, minutes, seconds };
    }

    const [tick, setTick] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setTick((t) => t + 1), 1000);
        return () => clearInterval(id);
    }, []);

    const countdown = useMemo(() => getCountdown(casamentoDate), [tick]);


    return(
        <main className="text-[var(--color-font-black)] max-w-7xl mx-auto flex flex-col justify-center leading-relaxed p-5 gap-15">

            <section className="rounded-3xl p-8 mt-5 md:p-12 text-white bg-gradient-to-b from-[var(--color-2)] to-[var(--color-3)] text-white shadow-2xl">
                <div className="flex flex-col items-center text-center gap-4">
                    <h1 className="text-4xl md:text-6xl font-light tracking-wide">
                        Larissa & Samuel
                    </h1>
                    <div className="mt-2 rounded-2xl bg-white/10 border border-white/20 px-6 py-4">
                        <p className="text-sm md:text-base font-medium">
                        
                        </p>
                        <p className="text-sm md:text-base text-white/90">{casamento?.local}</p>
                        <p className="text-xs md:text-sm text-white/80 mt-1">{casamento?.data}</p>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:mx-15">

                <div className="flex justify-center">
                <div className="w-full max-w-md rounded-3xl overflow-hidden border border-black/10 bg-white">
                    <img
                    src={foto}
                    alt="Foto do casal"
                    className="shadow-2xl w-full h-[360px] object-cover"
                    loading="lazy"
                    />
                </div>
                </div>

                <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-font-black)]">
                    Contagem regressiva
                </h2>

                {countdown.ended ? (
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="text-lg font-medium text-[var(--color-font-black)]">
                        Chegou o grande dia! 🎉
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                        Obrigado por fazer parte dessa história.
                    </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-3">
                    <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                        <div className="text-2xl md:text-3xl font-semibold text-[var(--color-font-black)]">
                        {countdown.days}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Dias</div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                        <div className="text-2xl md:text-3xl font-semibold text-[var(--color-font-black)]">
                        {pad2(countdown.hours)}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Horas</div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                        <div className="text-2xl md:text-3xl font-semibold text-[var(--color-font-black)]">
                        {pad2(countdown.minutes)}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Min</div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                        <div className="text-2xl md:text-3xl font-semibold text-[var(--color-font-black)]">
                        {pad2(countdown.seconds)}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Seg</div>
                    </div>
                    </div>
                )}

                <p className="text-sm text-gray-600 leading-relaxed">
                    Estamos contando os dias para celebrar com vocês. 💙
                </p>
                </div>
            </section>

            <section className="shadow-2xl min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[var(--color-2)] to-[var(--color-3)] text-white rounded-3xl">
                <h1 className="text-4xl md:text-6xl font-light tracking-wide">
                    Larissa & Samuel
                </h1>

                <p className="mt-4 text-lg md:text-xl font-light opacity-90">
                    Celebrando o amor, a união e os momentos especiais
                </p>

                <button className="mt-8 px-8 py-3 rounded-full bg-white text-[var(--color-2)] font-medium hover:scale-105 transition-transform">
                    Confirmar presença
                </button>
            </section>
           
            <section className="py-10 px-6 text-center">
                <h2 className="text-3xl font-semibold text-[var(--color-font-black)]">
                    Visite nosso mural
                </h2>

                <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
                    Nosso mural é um espaço especial onde cada palavra se transforma em lembrança.
                    Deixe seu carinho, seu conselho ou seu abraço em forma de mensagem.
                </p>
                <div className="flex justify-center">
                    <CardRecadoAddMensagem/>
                </div>
            </section>
        </main>
    );
}