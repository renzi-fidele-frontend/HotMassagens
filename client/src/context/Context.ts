import { IFiltros } from "@/types/global";
import { createContext, Dispatch, SetStateAction } from "react";

export const FiltrosContext = createContext<[IFiltros, Dispatch<SetStateAction<IFiltros>>] | null>(null);
