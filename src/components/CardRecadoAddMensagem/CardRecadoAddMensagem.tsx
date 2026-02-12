import { FaRegCommentDots } from "react-icons/fa";
import { useState } from "react";
import CardRecadoAdd from "../CardRecadoAdd/CardRecadoAdd";

export default function CardRecadoAddMensagem() {

    const [openRecadoSalvar, setOpenRecadoSalvar] = useState(false);

  return (
    <div className="flex border-1 border-[var(--color-font-black)] rounded-xl flex-col items-center p-8 gap-6">
        <div className="flex items-center bg-gray-100 rounded-full gap-3 p-5">
          <FaRegCommentDots className="text-4xl text-[var(--color-font-black)]" />
        </div>
        <p className="text-gray-400">Deixe seu recado no mural</p>
        <div>
            <button className="bg-[var(--color-2)] border-[var(--color-2)] cursor-pointer rounded-xl border-2 text-white flex justify-center items-center w-53 h-13 p-2" onClick={() => setOpenRecadoSalvar(true)}>Adicione seu recado</button>
      </div>
      <CardRecadoAdd open={openRecadoSalvar} onClose={() => setOpenRecadoSalvar(false)}> </CardRecadoAdd>
    </div>
  );
}