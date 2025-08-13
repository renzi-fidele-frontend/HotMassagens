"use client";

import Btn from "@/components/shared/Btn";
import { UseFiltrosValue } from "@/context/Provider";
import { BrushCleaning } from "lucide-react";

const BotaoDeLimparFiltros = () => {
   const { setFiltros } = UseFiltrosValue();

   function resetarFiltros() {
      setFiltros({
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
   }

   return (
      <div onClick={resetarFiltros}>
         <Btn className="whitespace-nowrap">
            <i>
               <BrushCleaning />
            </i>{" "}
            Limpar filtros
         </Btn>
      </div>
   );
};

export default BotaoDeLimparFiltros;
