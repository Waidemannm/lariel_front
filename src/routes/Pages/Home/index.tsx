import CardRecadoAddMensagem from "../../../components/CardRecadoAddMensagem/CardRecadoAddMensagem";
import foto from "../../../images/Home/fotoInicial.webp";

export default function Home(){
    return(
        <main className="text-[var(--color-font-black)] max-w-7xl mx-auto flex flex-col justify-center leading-relaxed p-5 gap-10">
            <img src={foto} alt="Foto do casal" className="shadow-xl w-full h-full border border-gray-300 rounded-lg object-cover"/>
            <div className="flex justify-center">
                <CardRecadoAddMensagem/>
            </div>
        </main>
    );
}