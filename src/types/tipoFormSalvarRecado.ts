import type { UseFormRegister } from "react-hook-form";
import type { TipoSalvarRecado } from "./tipoSalvarRecado";

export type TipoPropsFormSalvarRecado = { 
    register: UseFormRegister<TipoSalvarRecado>;
    onSubmit: () => void;  
}
 