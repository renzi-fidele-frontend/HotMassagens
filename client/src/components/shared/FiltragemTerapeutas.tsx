"use client";

import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { IToggleFiltros } from "@/types/global";
import SecaoCollapsivel from "./SecaoCollapsivel";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { UseFiltrosValue } from "@/context/Provider";
import { cidadesEmPortugal, coresDeCabelo, coresDeOlho, nacionalidades } from "@/content/data";

const FiltragemTerapeutas = () => {
   const [toggleFiltros, setToggleFiltros] = useState<IToggleFiltros>({
      localizacao: true,
      idade: true,
      caracteristicasFisicas: false,
      caracteristicasPessoais: false,
   });
   const { filtros, setFiltros } = UseFiltrosValue();

   //    Ativa e desativa o collapsivel dos cards de filtragem
   function toggleSection(section: keyof typeof toggleFiltros) {
      setToggleFiltros((prev) => ({ ...prev, [section]: !prev[section] }));
   }

   // TODO: Descobrir um jeito de identificar o type de value que por agora está definido como sendo unknown
   function atualizarFiltros(key: keyof typeof filtros, value: unknown) {
      setFiltros({ ...filtros, [key]: value });
   }

   /** Adiciona ou remove items selecionados ao array de filtragem */
   function atualizarArrayDeFiltros(key: keyof typeof filtros, value: string | number) {
      const arrayAtual = filtros[key] as (number | string)[];
      const novoArray = arrayAtual.includes(value) ? arrayAtual.filter((v) => v !== value) : [...arrayAtual, value];
      atualizarFiltros(key, novoArray);
   }

   function processarRadio(value: unknown) {
      if (value === "sim") {
         return true;
      } else if (value === "não") {
         return false;
      } else if (value === "qualquer") {
         return undefined;
      }
   }

   /** Retorna o default value dos radios */
   function processarFiltrosDefaultValue(value?: boolean): string {
      switch (value) {
         case true:
            return "sim";
         case false:
            return "não";
         case undefined:
            return "qualquer";
      }
   }

   return (
      <section className="space-y-4 sticky top-[20px]">
         {/* Filtragem da localização */}
         {/* TODO: Melhorar a UI da Filtragem de terapeutas ao adicionar ícones para melhorar a percepção */}
         {/* TODO: Renderizar o nr de terapeutas disponíveis para cada distrito */}
         <SecaoCollapsivel mostrar={toggleFiltros.localizacao} titulo="Localização" onOpenChange={() => toggleSection("localizacao")}>
            <ScrollArea className="h-[100px] sm:h-[130px]">
               <div className="space-y-2.5">
                  {cidadesEmPortugal.map((v, k) => (
                     <div key={k} className="flex items-center gap-2">
                        <Checkbox
                           checked={filtros?.localizacao?.includes(v)}
                           onCheckedChange={() => atualizarArrayDeFiltros("localizacao", v)}
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
               <span>{filtros.idade[1]} anos</span>
            </div>
            <Slider
               minStepsBetweenThumbs={2}
               defaultValue={filtros.idade}
               min={18}
               max={50}
               onValueChange={(value) => atualizarFiltros("idade", value)}
            />
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
                        <span>{filtros.altura[1]} cm</span>
                     </div>
                     <Slider
                        defaultValue={filtros.altura}
                        minStepsBetweenThumbs={2}
                        min={150}
                        max={200}
                        onValueChange={(value) => atualizarFiltros("altura", value)}
                     />
                  </div>
               </div>
               {/* Peso */}
               <div>
                  <p className="font-semibold">Peso</p>
                  <div>
                     <div className="flex items-center justify-between mb-3 text-zinc-400">
                        <span>{filtros.peso[0]} kg</span>
                        <span>{filtros.peso[1]} kg</span>
                     </div>
                     <Slider defaultValue={filtros.peso} min={45} max={100} onValueChange={(value) => atualizarFiltros("peso", value)} />
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
                  <RadioGroup
                     defaultValue={processarFiltrosDefaultValue(filtros.usaPiercings)}
                     onValueChange={(v) => atualizarFiltros("usaPiercings", processarRadio(v))}
                     className="flex items-center gap-4"
                  >
                     <div className="flex items-center gap-2">
                        <RadioGroupItem value="qualquer" id="qualquerPiercings" className="border-yellow-200" />
                        <Label htmlFor="qualquerPiercings">Qualquer</Label>
                     </div>
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
                  <RadioGroup
                     defaultValue={processarFiltrosDefaultValue(filtros.temTatuagens)}
                     onValueChange={(v) => atualizarFiltros("temTatuagens", processarRadio(v))}
                     className="flex items-center gap-4"
                  >
                     <div className="flex items-center gap-2">
                        <RadioGroupItem value="qualquer" id="qualquerTatuagens" className="border-yellow-200" />
                        <Label htmlFor="qualquerTatuagens">Qualquer</Label>
                     </div>
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
                  <RadioGroup
                     defaultValue={processarFiltrosDefaultValue(filtros.fumante)}
                     onValueChange={(v) => atualizarFiltros("fumante", processarRadio(v))}
                     className="flex items-center gap-4"
                  >
                     <div className="flex items-center gap-2">
                        <RadioGroupItem value="qualquer" id="qualquerFumante" className="border-yellow-200" />
                        <Label htmlFor="qualquerFumante">Qualquer</Label>
                     </div>
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
