"use client";

import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { IFiltros, IToggleFiltros } from "@/types/global";
import SecaoCollapsivel from "./SecaoCollapsivel";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

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

   //    Ativa e desativa o collapsivel dos cards de filtragem
   function toggleSection(section: keyof typeof toggleFiltros) {
      setToggleFiltros((prev) => ({ ...prev, [section]: !prev[section] }));
   }

   function atualizarFiltros(key: keyof typeof filtros, value: unknown) {
      setFiltros({ ...filtros, [key]: value });
   }

   /** Adiciona ou remove items selecionados ao array de filtragem */
   function atualizarArrayDeFiltros(key: keyof typeof filtros, value: string | number) {
      const arrayAtual = filtros[key] as (number | string)[];
      const novoArray = arrayAtual.includes(value) ? arrayAtual.filter((v) => v !== value) : [...arrayAtual, value];
      atualizarFiltros(key, novoArray);
   }

   return (
      <section className="space-y-4 sticky top-[20px]">
         {/* Filtragem da localização */}
         <SecaoCollapsivel mostrar={toggleFiltros.localizacao} titulo="Localização" onOpenChange={() => toggleSection("localizacao")}>
            <ScrollArea className="h-[100px] sm:h-[150px]">
               <div className="space-y-2.5">
                  {cidadesEmPortugal.map((v, k) => (
                     <div key={k} className="flex items-center gap-2">
                        <Checkbox
                           checked={filtros.localizacao?.includes(v)}
                           onCheckedChange={() => {
                              atualizarArrayDeFiltros("localizacao", v);
                           }}
                           id={`local-${v}`}
                           className="border-yellow-200"
                        />
                        <Label htmlFor={`local-${v}`}>{v}</Label>
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
                           <Checkbox
                              id={`olho-${v}`}
                              className="border-yellow-200"
                              onCheckedChange={() => atualizarArrayDeFiltros("corDosOlhos", v)}
                           />
                           <Label htmlFor={`olho-${v}`}>{v}</Label>
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
                           <Checkbox
                              id={`cabelo-${v}`}
                              className="border-yellow-200"
                              onCheckedChange={() => atualizarArrayDeFiltros("corDoCabelo", v)}
                           />
                           <Label htmlFor={`cabelo-${v}`}>{v}</Label>
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
               {/* Nacionalidade */}
               <div>
                  <p className="font-semibold">Nacionalidade</p>
                  <div className="flex flex-col gap-3">
                     {nacionalidades.map((v, k) => (
                        <div className="flex items-center gap-2" key={k}>
                           <Checkbox
                              checked={filtros.nacionalidade.includes(v)}
                              onCheckedChange={() => atualizarArrayDeFiltros("nacionalidade", v)}
                              id={`nacionalidade-${v}`}
                              className="border-yellow-200"
                           />
                           <Label htmlFor={`nacionalidade-${v}`}>{v}</Label>
                        </div>
                     ))}
                  </div>
               </div>
               {/* Piercings */}
               <div>
                  <p className="font-semibold">Usa Piercings?</p>
                  <RadioGroup onValueChange={(v) => atualizarFiltros("usaPiercings", v)} className="flex items-center gap-6">
                     <div className="flex items-center gap-2">
                        <RadioGroupItem value="sim" id="usaPiercings" className="border-yellow-200" />
                        <Label htmlFor="usaPiercings">Sim</Label>
                     </div>
                     <div className="flex items-center gap-2">
                        <RadioGroupItem value="não" id="naoUsaPiercings" className="border-yellow-200" />
                        <Label htmlFor="naoUsaPiercings">Não</Label>
                     </div>
                  </RadioGroup>
               </div>
               {/* Tatuagens */}
               <div>
                  <p className="font-semibold">Tem tatuagens?</p>
                  <RadioGroup onValueChange={(v) => atualizarFiltros("temTatuagens", v)} className="flex items-center gap-6">
                     <div className="flex items-center gap-2">
                        <RadioGroupItem value="sim" id="comTatuagem" className="border-yellow-200" />
                        <Label htmlFor="comTatuagem">Sim</Label>
                     </div>
                     <div className="flex items-center gap-2">
                        <RadioGroupItem value="não" id="semTatuagem" className="border-yellow-200" />
                        <Label htmlFor="semTatuagem">Não</Label>
                     </div>
                  </RadioGroup>
               </div>
               {/* Fumante */}
               <div>
                  <p className="font-semibold">Fumante?</p>
                  <RadioGroup onValueChange={(v) => atualizarFiltros("fumante", v)} className="flex items-center gap-6">
                     <div className="flex items-center gap-2">
                        <RadioGroupItem value="sim" id="fumante" className="border-yellow-200" />
                        <Label htmlFor="fumante">Sim</Label>
                     </div>
                     <div className="flex items-center gap-2">
                        <RadioGroupItem value="não" id="naoFumante" className="border-yellow-200" />
                        <Label htmlFor="naoFumante">Não</Label>
                     </div>
                  </RadioGroup>
               </div>
            </div>
         </SecaoCollapsivel>
      </section>
   );
};
export default FiltragemTerapeutas;
