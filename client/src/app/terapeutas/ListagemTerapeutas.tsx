"use client";

import CardTerapeuta from "@/components/shared/CardTerapeuta";
import { UseFiltrosValue } from "@/context/Provider";
import { Iterapeuta } from "@/types/global";

const ListagemTerapeutas = ({ terapeutas }: { terapeutas: Iterapeuta[] }) => {
   const { filtros } = UseFiltrosValue();
   console.log(filtros);

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
         {terapeutas.map((v, k) => (
            // Adicionar filtragem por localização

            <CardTerapeuta modoFiltragem={true} terapeuta={v} key={k} />
         ))}
      </div>
   );
};
export default ListagemTerapeutas;
