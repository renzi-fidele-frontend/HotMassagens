import { IFiltros } from "@/types/global";
import { ReactNode, useState } from "react";
import { FiltrosContext } from "./Context";

const ContextProvider = ({ children }: { children: ReactNode }) => {
   const [filtros, setFiltros] = useState<IFiltros>({
      localizacao: [],
      idade: [18, 50],
      corDosOlhos: [],
      altura: [150, 190],
      peso: [45, 100],
      corDoCabelo: [],
      nacionalidade: [],
      fumante: undefined,
      temTatuagens: undefined,
      usaPiercings: undefined,
   });

   return <FiltrosContext.Provider value={[filtros, setFiltros]}>{children}</FiltrosContext.Provider>;
};

export default ContextProvider;
