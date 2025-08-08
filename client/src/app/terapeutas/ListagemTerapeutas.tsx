"use client";

import CardTerapeuta from "@/components/shared/CardTerapeuta";
import { UseFiltrosValue } from "@/context/Provider";
import { Iterapeuta } from "@/types/global";
import { useEffect, useState } from "react";

// TODO: Adicionar o botão de limpar os filtros
// TODO: Adicionar uma ilustração caso não haja nenhuma terapeuta correspondente com os filtros

const ListagemTerapeutas = ({ terapeutas }: { terapeutas: Iterapeuta[] }) => {
   const { filtros } = UseFiltrosValue();
   const [terapeutasFiltradas, setTerapeutasFiltradas] = useState(terapeutas);
   console.log(filtros);

   // Atualizar os filtros sempre que houver uma mudança no estado
   useEffect(() => {
      function filtrarTerapeutas() {
         let dados = terapeutas.map((v) => v);
         dados = dados
            .filter(({ distrito }) => {
               if (filtros.localizacao.length === 0) {
                  return true;
               } else {
                  return filtros.localizacao.includes(distrito);
               }
            })
            .filter(({ caracteristicas }) => {
               if (filtros.idade[0] <= caracteristicas.idade && filtros.idade[1] >= caracteristicas.idade) {
                  return true;
               } else {
                  return false;
               }
            })
            .filter(({ caracteristicas }) => {
               if (filtros.corDosOlhos.length === 0) {
                  return true;
               } else {
                  return filtros.corDosOlhos.includes(caracteristicas.olhos);
               }
            })
            .filter(({ caracteristicas }) => {
               if (filtros.altura[0] <= caracteristicas.altura && filtros.altura[1] >= caracteristicas.altura) {
                  return true;
               } else {
                  return false;
               }
            })
            .filter(({ caracteristicas }) => {
               if (filtros.peso[0] <= caracteristicas.peso && filtros.peso[1] >= caracteristicas.peso) {
                  return true;
               } else {
                  return false;
               }
            })
            .filter(({ caracteristicas }) => {
               if (filtros.corDoCabelo.length === 0) {
                  return true;
               } else {
                  return filtros.corDoCabelo.includes(caracteristicas.cabelo);
               }
            })
            .filter(({ caracteristicas }) => {
               if (filtros.nacionalidade.length === 0) {
                  return true;
               } else {
                  return filtros.nacionalidade.includes(caracteristicas.nacionalidade);
               }
            })
            .filter(({ caracteristicas }) => caracteristicas.piercings);
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
