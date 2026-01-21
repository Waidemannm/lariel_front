import foto from "../../../images/Home/fotoInicial.webp";

export default function Home(){
    return(
        <main className="home-page">
            <img src={foto} alt="Foto do casal" className="shadow-xl w-full h-full border border-gray-300 rounded-lg object-cover"/>
        </main>
    );
}