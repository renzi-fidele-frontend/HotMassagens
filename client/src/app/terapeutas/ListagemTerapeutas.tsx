"use client";

import CardTerapeuta from "@/components/shared/CardTerapeuta";
import { UseFiltrosValue } from "@/context/Provider";
import { Iterapeuta } from "@/types/global";
import { useState } from "react";

const ListagemTerapeutas = ({ terapeutas }: { terapeutas: Iterapeuta[] }) => {
   const { filtros } = UseFiltrosValue();
   const [terapeutasFiltradas, setTerapeutasFiltradas] = useState(terapeutas);
   console.log(filtros);

   function filtrarTerapeutas() {
      setTerapeutasFiltradas((prevState) => {
         // Adicionar filtragem por localização
         return prevState.filter((terapeuta) => {
            terapeuta.distrito
         } );
      });
   }

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
         {terapeutas.map((v, k) => {
            // Adicionar filtragem por localização

            return <CardTerapeuta modoFiltragem={true} terapeuta={v} key={k} />;
         })}
      </div>
   );
};
export default ListagemTerapeutas;
