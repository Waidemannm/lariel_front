import { Link } from "react-router-dom";
 
export default function Menu(){
    return(
        <nav className="flex items-center gap-8">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">Home</Link>
        </nav>
    );
}