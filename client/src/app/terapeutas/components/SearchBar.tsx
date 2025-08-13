"use client";

import Btn from "@/components/shared/Btn";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ListFilter, Search } from "lucide-react";
import FiltragemTerapeutas from "./FiltragemTerapeutas";
import { UseFiltrosValue } from "@/context/Provider";
import BotaoDeLimparFiltros from "./BotaoDeLimparFiltros";
import { useState } from "react";

const SearchBar = () => {
   const { filtros, setFiltros } = UseFiltrosValue();
   const [open, setOpen] = useState(false);

   return (
      <div className="flex gap-5 w-full mt-10 mb-9">
         {/* Pesquisa */}
         <div className="relative flex items-center gap-2 sm:gap-5 w-full">
            <Input
               id="pesquisa"
               value={filtros.pesquisa}
               placeholder="Buscar por nome..."
               onChange={(e) => {
                  setFiltros((prevValue) => ({ ...prevValue, pesquisa: e.target.value }));
               }}
               className="ps-13 sm:placeholder:text-lg py-5 md:py-6 border-zinc-500"
            />
            <Search className="absolute start-4 text-zinc-400" />
            {/* Drawer da filtragem da versão mobile */}
            <Drawer open={open}>
               <DrawerTrigger asChild onClick={() => setOpen(true)}>
                  <Btn className="whitespace-nowrap md:hidden">
                     <span className="hidden sm:block">Mostrar filtros</span>
                     <span className="sm:hidden">
                        <ListFilter />
                     </span>
                  </Btn>
               </DrawerTrigger>
               <DrawerContent className="bg-black pb-5 px-5">
                  <ScrollArea className="mt-5 h-[65dvh]">
                     <FiltragemTerapeutas />
                     <div className="flex justify-center">
                        <BotaoDeLimparFiltros />
                     </div>
                  </ScrollArea>
               </DrawerContent>
            </Drawer>
         </div>
         {/* Limpar filtros */}
         <div className="hidden md:block">
            <BotaoDeLimparFiltros />
         </div>
      </div>
   );
};
export default SearchBar;
