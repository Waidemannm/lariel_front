import { Link } from "react-router-dom";
 
export default function Menu(){
    return(
        <nav className="flex items-center gap-8">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">Home</Link>
            <Link to="/confirmar_presenca" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">Confirmar presença</Link>
            <Link to="/lista_presentes" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">Lista de presentes</Link>
            <Link to="/mural_recados" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">Mural de recados</Link>
            <Link to="/casamento" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">Casamento</Link>
            <Link to="/dress_code" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">Dress code</Link>
            <Link to="/nossa_historia" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">Nossa história</Link>
            <Link to="/momentos" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">Momentos</Link>
        </nav>
    );
} 