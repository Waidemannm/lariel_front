
import type { TipoPropsConfirmar } from "../../types/tipoFormConfirmar";

export default function FormConfirmar ({register, onSubmit}: TipoPropsConfirmar) {

    return(
        <div>
            <form className="text-[var(--color-font-black)] flex flex-col gap-1" onSubmit={onSubmit}>
                <div className="m-3">
                    <label className="">Id convite </label>
                    <input className="focus:outline-none focus:ring-2 focus:ring-[var(--color-2)] focus:border-[var(--color-2)] transition-all duration-150 w-full p-2 border-1 border-[var(--color-font-black)] mt-2 rounded-xl outline-none" type="text" {...register("idConvite", { required: true, maxLength: 7})} />
                </div>
                <div className="m-3">
                    <label className="">Nome Convite </label>
                    <input className="focus:outline-none focus:ring-2 focus:ring-[var(--color-2)] focus:border-[var(--color-2)] transition-all duration-150 w-full p-2 border-1 border-[var(--color-font-black)] mt-2 rounded-xl outline-none" type="text" {...register("nomeConvite", { required: true, maxLength: 1000, })}/>
                </div>
            
                <div className="mb-5 mt-3">
                    <div className="flex justify-center">
                        <button className="bg-[var(--color-2)] text-white cursor-pointer rounded-xl border-2 border-[var(--color-2)] font-medium w-20 md:w-25 h-13 md:h-12" type="submit">Buscar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}