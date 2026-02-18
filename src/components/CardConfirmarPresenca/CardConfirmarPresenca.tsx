import { FaRegCalendarCheck } from "react-icons/fa";
import { useState } from "react";
import CardConfirmar from "../CardConfirmar/CardConfirmar";

export default function CardConfirmarPresenca() {

    const [openConfirmar, setOpenConfirmar] = useState(false);
    
  return (
    <div className="flex border-2 border-gray-200 w-full rounded-xl flex-col items-center p-8 gap-6 mt-5">
        <div className="flex items-center bg-gray-100 rounded-full gap-3 p-5">
          <FaRegCalendarCheck className="text-4xl text-[var(--color-font-black)]" />
        </div>
        <p className="text-gray-400">Confirme sua presença</p>
        <div>
            <button className="bg-[var(--color-2)] border-[var(--color-2)] cursor-pointer rounded-xl border-2 text-white flex justify-center items-center w-53 h-13 p-2" onClick={() => setOpenConfirmar(true)}>Buscar convidados</button>
      </div>
      <CardConfirmar open={openConfirmar} onClose={() => setOpenConfirmar(false)}> </CardConfirmar>
    </div>
  );
}