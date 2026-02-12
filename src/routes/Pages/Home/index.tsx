import CardRecadoAddMensagem from "../../../components/CardRecadoAddMensagem/CardRecadoAddMensagem";
import foto from "../../../images/Home/fotoInicial.webp";

export default function Home(){
    return(
        <main className="flex flex-col text-[var(--color-font-black)] max-w-7xl mx-auto px-4 py-10 leading-relaxed items-center gap-10">
            <img src={foto} alt="Foto do casal" className="shadow-xl w-full h-full border border-gray-300 rounded-lg object-cover"/>
            <CardRecadoAddMensagem/>
        </main>
    );
}