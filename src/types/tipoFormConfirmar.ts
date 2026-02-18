import type { UseFormRegister } from "react-hook-form";
import type { TipoConfirmar } from "./tipoConfirmar";

export type TipoPropsConfirmar = { 
    register: UseFormRegister<TipoConfirmar>;
    onSubmit: () => void;  
}
 