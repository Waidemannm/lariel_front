import { Link } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";
import React, { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaHome, FaSignInAlt, FaUserPlus, FaPills } from 'react-icons/fa';

export default function MobilePanel(): React.ReactElement {
    const { isOpen, close } = useMenu();

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }
        return () => {
            if (typeof document !== 'undefined') {
                document.body.style.overflow = '';
            }
        };
    }, [isOpen]);

    return (
        <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu móvel"
            className={`sm:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
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
                <nav className="flex flex-col items-center gap-8 text-xl font-semibold" onClick={close}>
                    <Link 
                        to="/" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaHome className="text-2xl" />
                        <span>HOME</span>
                    </Link>
                    <Link 
                        to="/login" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaSignInAlt className="text-2xl" />
                        <span>LOGIN</span>
                    </Link>
                    <Link 
                        to="/cadastro" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaUserPlus className="text-2xl" />
                        <span>CADASTRO</span>
                    </Link>
                    <Link 
                        to="/remedios" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaPills className="text-2xl" />
                        <span>REMÉDIOS</span>
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


