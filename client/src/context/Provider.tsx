"use client";
import { IFiltros } from "@/types/global";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface IFiltrosContext {
   filtros: IFiltros;
   setFiltros: Dispatch<SetStateAction<IFiltros>>;
}

// Inicializando o contexto
const FiltrosContext = createContext<IFiltrosContext | null>(null);

// Componente pai que distribui o contexto
const FiltrosProvider = ({ children }: { children: ReactNode }) => {
   const [filtros, setFiltros] = useState<IFiltros>({
      localizacao: [],
      idade: [18, 50],
      corDosOlhos: [],
      altura: [150, 200],
      peso: [45, 100],
      corDoCabelo: [],
      nacionalidade: [],
      fumante: undefined,
      temTatuagens: undefined,
      usaPiercings: undefined,
      pesquisa: "",
   });

   return <FiltrosContext.Provider value={{ filtros, setFiltros }}>{children}</FiltrosContext.Provider>;
};

// Hook para apanhar os dados do contexto
// Aprendizado importante: Utilizando o throw new Error eu não tenho mais que me preoucupar em fazer checagem da tipagem
export const UseFiltrosValue = () => {
   const context = useContext(FiltrosContext);

   if (!context) {
      throw new Error("O UseFiltrosValue deve ser usado dentro do FiltrosProvider");
   }

   return { filtros: context.filtros, setFiltros: context.setFiltros };
};

export default FiltrosProvider;
