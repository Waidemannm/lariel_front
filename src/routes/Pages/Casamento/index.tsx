import { useEffect, useState } from "react";
import { HiOutlineCalendar, HiOutlineLocationMarker  } from "react-icons/hi";
import { Link } from "react-router-dom";
import type { TipoCasamento } from "../../../types/tipoCasamento";
import type { TipoCasal } from "../../../types/tipoCasal";
import dados from "../../../../db.json";

    export default function Casamento(){

        const [casamento, setCasamento] = useState<TipoCasamento>();
        const [casal, setCasal] = useState<TipoCasal[]>([]);
        const nomesCasal = casal.map(p => p.nome).join(" - ");
        const urlMaps = casamento?.urlMaps;

        useEffect(() => {
            setCasamento(dados.casamento[0]); 
            setCasal(dados.casal);
        }, []);

        const googleCalendarUrl = `
        https://calendar.google.com/calendar/render?action=TEMPLATE
        &text=Casamento-${nomesCasal}
        &dates=20260801/20260802
        &details=Nosso casamento! 💙
        &${casamento?.local}
        `.replace(/\s+/g, '');

        const icsFile = `
        BEGIN:VCALENDAR
        VERSION:2.0
        BEGIN:VEVENT
        URL:https://seudominio.com //mudar para url do deploy//
        DTSTART:20260801T173000
        DTEND:20260801T200000
        SUMMARY:Casamento ${nomesCasal}
        DESCRIPTION:Nosso casamento! 💙
        LOCATION:${casamento?.local}
        END:VEVENT
        END:VCALENDAR
        `;

        const downloadICS = () => {
        const blob = new Blob([icsFile], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `casamento-${nomesCasal}}.ics`;
        link.click();
        
        URL.revokeObjectURL(url);
        };

        return(
            <main className="text-[var(--color-font-black)] max-w-7xl mx-auto px-4 py-10 leading-relaxed flex flex-col items-center gap-10">

                <iframe src={casamento?.urlGoogleMaps} rel="noopner noreferrer" className="w-full h-80 md:h-50 xl:h-65 border border-gray-300 rounded-lg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <div className="w-full flex flex-col items-center gap-12 md:flex-row lg:items-start md:justify-center lg:justify-between">

                    <div className="flex flex-col max-w-xl w-full">
                        <h1 className="text-xl font-normal">Evento</h1>
                        <h2 className="text-2xl font-semibold">Casamento</h2>

                        <div className="flex flex-row gap-5 mt-5">
                            <div className="bg-gray-100 rounded-full flex items-center justify-center aspect-square w-14">
                                <HiOutlineCalendar className="text-[var(--color-font-black)] text-[1.2rem]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-lg font-thin">Data</h1>
                                <p className="text-md font-medium">{casamento?.data}</p>
                            </div>
                            </div>

                            <div className="flex flex-row gap-5 mt-5">
                            <div className="bg-gray-100 rounded-full flex items-center justify-center aspect-square w-14">
                                <HiOutlineLocationMarker className="text-[var(--color-font-black)] text-[1.2rem]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-lg font-thin">Local</h1>
                                <p className="text-md font-medium">{casamento?.local}</p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col lg:flex-row md:flex-wrap items-center justify-center gap-4">
                            <Link to={`${urlMaps}`} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-xl p-3 rounded-lg text-white w-full md:w-56 lg:w-45 flex justify-center items-center hover:text-blue-200 transition-colors text-sm font-medium" >ABRIR NO MAPS</Link>

                            <Link to={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-xl p-3 rounded-lg text-white w-full md:w-56 lg:w-45 flex justify-center items-center hover:text-blue-200 transition-colors lg:text-sm font-medium">ADICIONAR À AGENDA </Link>

                            <button onClick={downloadICS} className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-xl p-3 rounded-lg text-white w-full md:w-56 lg:w-45 flex justify-center items-center hover:text-blue-200 transition-colors lg:text-sm font-medium">DOWNLOAD .ics</button>
                        </div>
                    </div>
                    <img src={casamento?.urlFoto} alt="Foto do local do casamento" className="shadow-xl w-full md:w-1/4 max-w-sm h-auto border border-gray-300 rounded-lg object-cover"/>
                </div>
            </main>
        );
    }