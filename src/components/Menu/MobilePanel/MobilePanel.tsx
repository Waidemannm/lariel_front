import { Link } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";
import React, { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaHome, FaRegCalendarCheck, FaGift,FaRegCommentDots, FaHeart, FaTshirt,FaBookOpen, FaCameraRetro} from 'react-icons/fa';

export default function MobilePanel(): React.ReactElement {
    const { isOpen, close } = useMenu();

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isOpen ? 'hidden' : '';
            document.documentElement.style.overflow = "hidden";
        }
        return () => {
            if (typeof document !== 'undefined') {
                document.body.style.overflow = '';
                document.documentElement.style.overflow = "";
            }
        };
        
    }, [isOpen]);

    return (
        <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu móvel"
            className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div 
                className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/95 to-gray-900 backdrop-blur-sm transition-all duration-500 ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`} 
                onClick={close} 
                aria-hidden
            ></div>
            <div 
                className={`relative z-10 flex flex-col items-center justify-center h-full text-white/90 transition-all duration-500 transform ${
                    isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
                }`}
            >
                <nav className="overflow-auto flex flex-col items-center gap-8 text-xl font-semibold" onClick={close}>
                    <Link 
                        to="/" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaHome className="text-2xl" />
                        <span>HOME</span>
                    </Link>

                    <Link 
                        to="/confirmar_presenca" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaRegCalendarCheck className="text-2xl" />
                        <span>Confirmar presença</span>
                    </Link>

                    <Link 
                        to="/lista_presentes" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaGift className="text-2xl" />
                        <span>Lista de presentes</span>
                    </Link>

                    <Link 
                        to="/mural_recados" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaRegCommentDots className="text-2xl" />
                        <span>Mural de recados</span>
                    </Link>

                    <Link 
                        to="/casamento" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaHeart className="text-2xl" />
                        <span>Casamento</span>
                    </Link>

                    <Link 
                        to="/dress_code" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaTshirt className="text-2xl" />
                        <span>Dress code</span>
                    </Link>

                    <Link 
                        to="/nossa_historia" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaBookOpen className="text-2xl" />
                        <span>Nossa história</span>
                    </Link>

                    <Link 
                        to="/momentos" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaCameraRetro className="text-2xl" />
                        <span>Momentos</span>
                    </Link>
                   
                </nav>

                <div className="mt-12 flex items-center gap-8">
                    <Link target="_blank" rel="noopner noreferrer" to="#" aria-label="Facebook" className="p-3 rounded-full bg-white/5 transition-all duration-300 hover:bg-blue-500 hover:scale-110 hover:rotate-12 active:scale-95" ><FaFacebookF className="text-xl" /></Link>
                    <Link target="_blank" rel="noopner noreferrer" to="#" aria-label="Instagram" className="p-3 rounded-full bg-white/5 transition-all duration-300 hover:bg-blue-500 hover:scale-110 hover:rotate-12 active:scale-95" ><FaInstagram className="text-x" /></Link>
                    <Link target="_blank" rel="noopner noreferrer" to="#" aria-label="YouTube" className="p-3 rounded-full bg-white/5 transition-all duration-300 hover:bg-blue-500 hover:scale-110 hover:rotate-12 active:scale-95" ><FaYoutube className="text-x" /></Link>
                </div>
            </div>
        </div>
    );
}
 

