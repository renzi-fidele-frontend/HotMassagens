import Container from "@/components/layout/Container";
import FiltragemTerapeutas from "@/components/shared/FiltragemTerapeutas";
import { HeadingXl } from "@/components/shared/Typography";
import { Input } from "@/components/ui/input";
import { Search, Venus } from "lucide-react";

export default function Terapeutas() {
   return (
      <div className="bg-linear-to-b from-black to-gray-800 pb-15 lg:pb-20 text-white">
         <Container>
            {/* Heading */}
            <div className="flex items-end gap-6 pt-8 pb-5">
               <HeadingXl>Nossas terapeutas</HeadingXl>
               <div className="flex border rounded-4xl border-zinc-600 py-2 px-7 gap-2.5 font-semibold">
                  <Venus /> 8 Disponíveis
               </div>
            </div>
            {/* Separador */}
            <div className="mask-r-from-0%">
               <hr className="bg-gradiente py-1 border-0" />
            </div>
            {/* Pesquisa */}
            <div className="relative flex items-center mt-10 mb-9 ">
               <Input placeholder="Buscar por nome..." className="ps-13 placeholder:text-lg py-6 border-zinc-500" />
               <Search className="absolute start-4 text-zinc-400" />
            </div>
            {/* Corpo */}
            <main className="flex gap-8">
               <div className="basis-[25%]">
                  <FiltragemTerapeutas />
               </div>
               <div></div>
            </main>
         </Container>
      </div>
   );
}
