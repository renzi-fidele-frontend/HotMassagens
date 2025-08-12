import Btn from "@/components/shared/Btn";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ListFilter, Search } from "lucide-react";
import FiltragemTerapeutas from "./FiltragemTerapeutas";

const SearchBar = () => {
   return (
      <div>
         {/* Pesquisa */}
         <div className="relative flex items-center mt-10 mb-9 gap-2 sm:gap-5">
            <Input placeholder="Buscar por nome..." className="ps-13 sm:placeholder:text-lg py-5 md:py-6 border-zinc-500" />
            <Search className="absolute start-4 text-zinc-400" />
            <Drawer>
               <DrawerTrigger asChild>
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
                  </ScrollArea>
               </DrawerContent>
            </Drawer>
         </div>
      </div>
   );
};
export default SearchBar;
