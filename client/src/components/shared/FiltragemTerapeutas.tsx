"use client";

import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
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
      caracteristicasFisicas: true,
      caracteristicasPessoais: true,
   });
   const [filtros, setFiltros] = useState<IFiltros>({
      localizacao: null,
      idade: [18, 50],
   });

   //    Ativa e desativa o collapsivel dos cards de filtragem
   function toggleSection(section: keyof typeof toggleFiltros) {
      setToggleFiltros((prev) => ({ ...prev, [section]: !prev[section] }));
   }

   function atualizarFiltros(key: keyof typeof filtros, value: unknown) {
      setFiltros({ ...filtros, [key]: value });
   }

   return (
      <section className="space-y-4">
         {/* Filtragem da localização */}
         <SecaoCollapsivel
            mostrar={toggleFiltros.localizacao}
            titulo="Localização"
            filtros={toggleFiltros}
            onOpenChange={() => toggleSection("localizacao")}
         >
            <ScrollArea className="h-[200px]">
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
         <SecaoCollapsivel titulo="Idade" mostrar={toggleFiltros.idade} filtros={toggleFiltros} onOpenChange={() => toggleSection("idade")}>
            <div className="flex items-center justify-between mb-3">
               <span>{filtros.idade[0]} anos</span>
               <span>50 anos</span>
            </div>
            <Slider min={18} max={50} onValueChange={(value) => atualizarFiltros("idade", value)} />
         </SecaoCollapsivel>

         {/* Filtragem das características físicas */}
      </section>
   );
};
export default FiltragemTerapeutas;
