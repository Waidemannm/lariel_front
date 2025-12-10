import Menu from "../Menu/Menu";
import { MenuProvider } from "../Menu/context/MenuContext";
import HamburgerButton from "../Menu/HamburgerButton/HamburgerButton";
import MobilePanel from "../Menu/MobilePanel/MobilePanel";
import fav from "../../images/ImgIndex/favicon.svg";
import { useEffect, useState } from "react";
import type { TipoCasamento } from "../../types/tipoCasamento";
import dados from "../../../db.json";

export default function Cabecalho () {

    const [casamento, setCasamento] = useState<TipoCasamento>();
    
    useEffect(() => {
        setCasamento(dados.casamento[0]); 
    }, []);

    return (
    <header  className="sticky top-0 z-50 w-full z-50 flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg md:flex-col md:gap-6 md: p-5 xl:flex-row xl:gap-0">
        <div className="flex items-center">
            <h1 className="text-2xl font-bold flex items-center">
                <img src={fav}alt="Lariel" className="w-8 h-8 mr-3" />
                <span>{casamento?.tituloPage}</span>
            </h1>
        </div>
        <MenuProvider>
            <div className="flex items-center gap-4">
                <div className="hidden md:block">
                    <Menu />
                </div>
                <div className="md:hidden">
                    <HamburgerButton className="text-white hover:bg-white/20" />
                </div>
            </div>
            <MobilePanel />
        </MenuProvider>
    </header>
)
};