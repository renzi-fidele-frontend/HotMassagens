import Container from "@/components/layout/Container";
import FiltragemTerapeutas from "@/app/terapeutas/components/FiltragemTerapeutas";
import { HeadingXl } from "@/components/shared/Typography";
import { getTerapeutas } from "@/services/strapi";
import { Venus } from "lucide-react";
import ListagemTerapeutas from "./components/ListagemTerapeutas";
import SearchBar from "./components/SearchBar";

export default async function Terapeutas() {
   const { data: terapeutas } = await getTerapeutas();

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
            {/* Barra de pesquisa */}
            <SearchBar />
            {/* Corpo */}
            <main className="flex gap-8">
               <div className="hidden md:block md:basis-[30%] xl:basis-[25%]">
                  <FiltragemTerapeutas />
               </div>
               <div className="md:basis-[70%] xl:basis-[75%]">
                  <ListagemTerapeutas terapeutas={terapeutas} />
               </div>
            </main>
         </Container>
      </div>
   );
}
