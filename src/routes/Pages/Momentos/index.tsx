import dados from "../../../../db.json";
import { useEffect, useState } from "react";
import type { TipoMomentos } from "../../../types/tipoMomentos";
import type { TipoMomento } from "../../../types/tipoMomento";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CardMomento from "../../../components/CardMomento/CardMomento";
import "swiper/swiper.css";            
import "swiper/swiper-bundle.css"; 

export default function Momentos(){

    const [momentos, setMomentos] = useState<TipoMomento[]>([]);
    const [momento, setMomento] = useState<TipoMomentos>();

    useEffect(() => {
        setMomento(dados.momentos[0]); 
        setMomentos(dados.momento)
    }, []);

    return(
        <main className="flex flex-col items-center text-[var(--color-font-black)] max-w-7xl mx-auto px-4 py-10 leading-relaxed flex flex-col gap-10">
            <div className="w-full md:max-w-xl max-w-sm">
                <h1 className="text-sm font-thin text-center">GALERIA DE FOTOS</h1>
                <h2 className="text-2xl font-semibold mb-3 text-center">Momentos</h2>
                <p className="text-md font-normal">{momento?.texto}</p> 
            </div>
            <div className="w-full flex justify-center">
                <Swiper modules={[Navigation, Pagination]} spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} className="w-full max-w-3xl rounded-lg shadow-xl">
                {momentos.map((m, index) => (
                    <SwiperSlide key={index}>
                        <CardMomento momento={m}/>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div> 
        </main>
    );
}