import Container from "@/components/layout/Container";
import Btn from "@/components/shared/Btn";
import CardTerapeuta from "@/components/shared/CardTerapeuta";
import FiltragemTerapeutas from "@/components/shared/FiltragemTerapeutas";
import { HeadingXl } from "@/components/shared/Typography";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getTerapeutas } from "@/services/strapi";
import { ListFilter, Search, Venus } from "lucide-react";

export default async function Terapeutas() {
   const { data: terapeutas } = await getTerapeutas();
   console.log(terapeutas);
   // TODO: Adicionar a funcionalidade de paginação

   return (
      <div className="bg-linear-to-b from-black to-gray-800 pb-15 lg:pb-20 text-white">
         <Container>
            {/* Heading */}
            <div className="flex flex-wrap sm:flex-nowrap items-end gap-3 sm:gap-6 pt-5 sm:pt-8 pb-5">
               <HeadingXl>Nossas terapeutas</HeadingXl>
               <div className="flex border rounded-4xl border-zinc-600 py-2 px-7 gap-2.5 font-semibold">
                  <Venus /> <span>{terapeutas.length}</span> Disponíveis
               </div>
            </div>
            {/* Separador */}
            <div className="mask-r-from-0%">
               <hr className="bg-gradiente py-1 border-0" />
            </div>
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
            {/* Corpo */}
            <main className="flex gap-8">
               <div className="hidden md:block md:basis-[30%] xl:basis-[25%]">
                  <FiltragemTerapeutas />
               </div>
               <div className="md:basis-[70%] xl:basis-[75%]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
                     {terapeutas.map((v, k) => (
                        <CardTerapeuta modoFiltragem={true} terapeuta={v} key={k} />
                     ))}
                  </div>
               </div>
            </main>
         </Container>
      </div>
   );
}
