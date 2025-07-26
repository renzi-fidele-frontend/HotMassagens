"use client";

import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { IFiltros, IToggleFiltros } from "@/types/global";
import SecaoCollapsivel from "./SecaoCollapsivel";

const cidadesEmPortugal = [
   "Lisboa",
   "Porto",
   "Amadora",
   "Braga",
   "Setúbal",
   "Coimbra",
   "Funchal",
   "Almada",
   "Vila Nova de Gaia",
   "Loures",
   "Odivelas",
   "Sintra",
   "Cascais",
   "Vila Franca de Xira",
   "Matosinhos",
   "Gondomar",
   "Maia",
   "Seixal",
   "Barreiro",
   "Aveiro",
];
const coresDeOlho = ["Castanhos", "Azuis", "Verdes", "Pretos", "Mel", "Cinzentos"];
const coresDeCabelo = ["Preto", "Castanho", "Loiro", "Ruivo", "Grisalho"];
const nacionalidades = ["Portuguesa", "Brasileira", "Espanhola"];

const FiltragemTerapeutas = () => {
   const [toggleFiltros, setToggleFiltros] = useState<IToggleFiltros>({
      localizacao: true,
      idade: true,
      caracteristicasFisicas: false,
      caracteristicasPessoais: false,
   });
   const [filtros, setFiltros] = useState<IFiltros>({
      localizacao: null,
      idade: [18, 50],
      altura: [150, 190],
      peso: [45, 100],
   });

   //    Ativa e desativa o collapsivel dos cards de filtragem
   function toggleSection(section: keyof typeof toggleFiltros) {
      setToggleFiltros((prev) => ({ ...prev, [section]: !prev[section] }));
   }

   function atualizarFiltros(key: keyof typeof filtros, value: unknown) {
      setFiltros({ ...filtros, [key]: value });
   }

   return (
      <section className="space-y-4 sticky top-[20px]">
         {/* Filtragem da localização */}
         <SecaoCollapsivel mostrar={toggleFiltros.localizacao} titulo="Localização" onOpenChange={() => toggleSection("localizacao")}>
            <ScrollArea className="h-[150px]">
               <div className="space-y-2.5">
                  {cidadesEmPortugal.map((v, k) => (
                     <div key={k} className="flex items-center gap-2">
                        <Checkbox className="border-yellow-200" />
                        <Label>{v}</Label>
                     </div>
                  ))}
               </div>
            </ScrollArea>
         </SecaoCollapsivel>

         {/* Filtragem da idade */}
         <SecaoCollapsivel titulo="Idade" mostrar={toggleFiltros.idade} onOpenChange={() => toggleSection("idade")}>
            <div className="flex items-center justify-between mb-3 text-zinc-400">
               <span>{filtros.idade[0]} anos</span>
               <span>50 anos</span>
            </div>
            <Slider min={18} max={50} onValueChange={(value) => atualizarFiltros("idade", value)} />
         </SecaoCollapsivel>

         {/* Filtragem das características físicas */}
         <SecaoCollapsivel
            mostrar={toggleFiltros.caracteristicasFisicas}
            onOpenChange={() => toggleSection("caracteristicasFisicas")}
            titulo="Características Físicas"
         >
            <div className="space-y-6 *:space-y-2">
               {/* Cor dos olhos */}
               <div>
                  <p className="font-semibold">Cor dos olhos</p>
                  <div className="grid grid-cols-2 gap-2">
                     {coresDeOlho.map((v, k) => (
                        <div key={k} className="flex items-center gap-2">
                           <Checkbox className="border-yellow-200" />
                           <Label>{v}</Label>
                        </div>
                     ))}
                  </div>
               </div>
               {/* Altura */}
               <div>
                  <p className="font-semibold">Altura</p>
                  <div>
                     <div className="flex items-center justify-between mb-3 text-zinc-400">
                        <span>{filtros.altura[0]} cm</span>
                        <span>190 cm</span>
                     </div>
                     <Slider min={150} max={190} onValueChange={(value) => atualizarFiltros("altura", value)} />
                  </div>
               </div>
               {/* Peso */}
               <div>
                  <p className="font-semibold">Peso</p>
                  <div>
                     <div className="flex items-center justify-between mb-3 text-zinc-400">
                        <span>{filtros.peso[0]} kg</span>
                        <span>100 kg</span>
                     </div>
                     <Slider min={150} max={190} onValueChange={(value) => atualizarFiltros("peso", value)} />
                  </div>
               </div>
               {/* Cor do cabelo */}
               <div>
                  <p className="font-semibold">Cor do cabelo</p>
                  <div className="grid grid-cols-2 gap-2">
                     {coresDeCabelo.map((v, k) => (
                        <div key={k} className="flex items-center gap-2">
                           <Checkbox className="border-yellow-200" />
                           <Label>{v}</Label>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </SecaoCollapsivel>

         {/* Filtragem das características Pessoais */}
         <SecaoCollapsivel
            titulo="Características Pessoais"
            mostrar={toggleFiltros.caracteristicasPessoais}
            onOpenChange={() => toggleSection("caracteristicasPessoais")}
         >
            <div className="space-y-6 *:space-y-2">
               <div>
                  <p className="font-semibold">Nacionalidade</p>
                  <div className="flex flex-col gap-3">
                     {nacionalidades.map((v, k) => (
                        <div className="flex items-center gap-2" key={k}>
                           <Checkbox className="border-yellow-200" />
                           <Label>{v}</Label>
                        </div>
                     ))}
                  </div>
               </div>
               <div>
                  <p className="font-semibold">Usa Piercings?</p>
                  <div className="flex items-center gap-6">
                     <div className="flex items-center gap-2">
                        <Checkbox className="border-yellow-200" />
                        <Label>Sim</Label>
                     </div>
                     <div className="flex items-center gap-2">
                        <Checkbox className="border-yellow-200" />
                        <Label>Não</Label>
                     </div>
                  </div>
               </div>
               <div>
                  <p className="font-semibold">Tem tatuagens?</p>
                  <div className="flex items-center gap-6">
                     <div className="flex items-center gap-2">
                        <Checkbox className="border-yellow-200" />
                        <Label>Sim</Label>
                     </div>
                     <div className="flex items-center gap-2">
                        <Checkbox className="border-yellow-200" />
                        <Label>Não</Label>
                     </div>
                  </div>
               </div>
               <div>
                  <p className="font-semibold">Fumante?</p>
                  <div className="flex items-center gap-6">
                     <div className="flex items-center gap-2">
                        <Checkbox className="border-yellow-200" />
                        <Label>Sim</Label>
                     </div>
                     <div className="flex items-center gap-2">
                        <Checkbox className="border-yellow-200" />
                        <Label>Não</Label>
                     </div>
                  </div>
               </div>
            </div>
         </SecaoCollapsivel>
      </section>
   );
};
export default FiltragemTerapeutas;
