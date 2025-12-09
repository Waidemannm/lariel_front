import foto from "../../../images/Casamento/igreja.webp";
import { HiOutlineCalendar, HiOutlineLocationMarker  } from "react-icons/hi";
import { Link } from "react-router-dom";

    export default function Casamento(){
        const googleCalendarUrl = `
        https://calendar.google.com/calendar/render?action=TEMPLATE
        &text=Casamento-Larissa-Samuel
        &dates=20260801/20260802
        &details=Nosso casamento! 💙
        &location=SP-102 70 Taiaçupeba, Mogi das Cruzes
        `.replace(/\s+/g, '');

        const icsFile = `
        BEGIN:VCALENDAR
        VERSION:2.0
        BEGIN:VEVENT
        URL:https://seudominio.com
        DTSTART:20260801T173000
        DTEND:20260801T200000
        SUMMARY:Casamento Mano e Marcella
        DESCRIPTION:Nosso casamento! 💙
        LOCATION:SP-102 70 Taiaçupeba, Mogi das Cruzes
        END:VEVENT
        END:VCALENDAR
        `;

        const downloadICS = () => {
        const blob = new Blob([icsFile], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "casamento-mano-marcella.ics";
        link.click();
        
        URL.revokeObjectURL(url);
        };

        return(
            <main className="text-[var(--color-font-black)] max-w-7xl mx-auto px-4 py-10 leading-relaxed flex flex-col items-center gap-10">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4550.48164462218!2d-46.18290498828231!3d-23.61806307867229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cddf00134ec8bd%3A0xf1e3a196af031b52!2sVilla%20Castanieri%20Eventos!5e1!3m2!1spt-BR!2sbr!4v1765309297884!5m2!1spt-BR!2sbr" rel="noopner noreferrer" className="w-full h-80 md:h-50 xl:h-65 border border-gray-300 rounded-lg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

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
                                <p className="text-md font-medium">01 de agosto de 2026 — 17h30</p>
                            </div>
                            </div>

                            <div className="flex flex-row gap-5 mt-5">
                            <div className="bg-gray-100 rounded-full flex items-center justify-center aspect-square w-14">
                                <HiOutlineLocationMarker className="text-[var(--color-font-black)] text-[1.2rem]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-lg font-thin">Local</h1>
                                <p className="text-md font-semibold leading-tight">SP-102, 70 Taiaçupeba, Mogi das Cruzes, 08765-340</p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col lg:flex-row md:flex-wrap items-center justify-center gap-4">
                            <Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4550.48164462218!2d-46.18290498828231!3d-23.61806307867229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cddf00134ec8bd%3A0xf1e3a196af031b52!2sVilla%20Castanieri%20Eventos!5e1!3m2!1spt-BR!2sbr!4v1765309297884!5m2!1spt-BR!2sbr" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-xl p-3 rounded-lg text-white w-full md:w-56 lg:w-45 flex justify-center items-center hover:text-blue-200 transition-colors text-sm font-medium" >ABRIR NO MAPS</Link>

                            <Link to={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-xl p-3 rounded-lg text-white w-full md:w-56 lg:w-45 flex justify-center items-center hover:text-blue-200 transition-colors lg:text-sm font-medium">ADICIONAR À AGENDA </Link>

                            <button onClick={downloadICS} className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-xl p-3 rounded-lg text-white w-full md:w-56 lg:w-45 flex justify-center items-center hover:text-blue-200 transition-colors lg:text-sm font-medium">Download .ics</button>
                        </div>
                    </div>
                    <img src={foto} alt="Foto do local do casamento" className="shadow-xl w-full md:w-1/3 max-w-sm h-auto border border-gray-300 rounded-lg object-cover"/>
                </div>
            </main>
        );
    }