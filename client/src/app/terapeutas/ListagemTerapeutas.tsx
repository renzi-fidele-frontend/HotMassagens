"use client";

import CardTerapeuta from "@/components/shared/CardTerapeuta";
import { UseFiltrosValue } from "@/context/Provider";
import { Iterapeuta } from "@/types/global";
import { useEffect, useState } from "react";

// TODO: Adicionar mais um controlador de idade ao slider
// TODO: Adicionar o botão de limpar os filtros

const ListagemTerapeutas = ({ terapeutas }: { terapeutas: Iterapeuta[] }) => {
   const { filtros } = UseFiltrosValue();
   const [terapeutasFiltradas, setTerapeutasFiltradas] = useState(terapeutas);
   console.log(filtros);

   // Atualizar os filtros sempre que houver uma mudança no estado
   useEffect(() => {
      function filtrarTerapeutas() {
         let dados = terapeutas.map((v) => v);
         dados = dados.filter(({ distrito }) => {
            if (filtros.localizacao.length === 0) {
               return true;
            } else {
               return filtros.localizacao.includes(distrito);
            }
         });
         setTerapeutasFiltradas(dados);
      }
      filtrarTerapeutas();
   }, [filtros, terapeutas]);

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
         {terapeutasFiltradas.map((v, k) => (
            <CardTerapeuta modoFiltragem={true} terapeuta={v} key={k} />
         ))}
      </div>
   );
};
export default ListagemTerapeutas;
