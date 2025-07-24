"use client";

import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

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
   const [filtros, setFiltros] = useState({ localizacao: true, idade: true, caracteristicasFisicas: true, caracteristicasPessoais: true });

   //    Ativa e desativa o collapsivel dos cards de filtragem
   function toggleSection(section: keyof typeof filtros) {
      setFiltros((prev) => ({ ...prev, [section]: !prev[section] }));
   }

   return (
      <section className="space-y-4">
         {/* Filtragem da localização */}
         <Collapsible open={filtros.localizacao} onOpenChange={() => toggleSection("localizacao")}>
            <div className="border border-zinc-500 rounded-xl">
               {/* Head */}
               <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between p-6 hover:bg-gray-900 rounded-[inherit] hover:cursor-pointer">
                     <h6 className="text-lg font-bold">Localização</h6>
                     {filtros.localizacao ? <ChevronUp /> : <ChevronDown />}
                  </div>
               </CollapsibleTrigger>
               {/* Body */}
               <CollapsibleContent>
                  <ScrollArea className="px-6 pb-6 h-[200px]">
                     <div className="space-y-2">
                        {cidadesEmPortugal.map((v, k) => (
                           <div key={k} className="flex items-center gap-2">
                              <Checkbox />
                              <Label>{v}</Label>
                           </div>
                        ))}
                     </div>
                  </ScrollArea>
               </CollapsibleContent>
            </div>
         </Collapsible>
      </section>
   );
};
export default FiltragemTerapeutas;
