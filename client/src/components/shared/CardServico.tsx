import { Iterapeuta } from "@/types/global";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Info } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import Btn from "./Btn";

const CardServico = ({ servico }: { servico: Iterapeuta["servicos"][0] }) => {
   return (
      <div className="flex flex-col items-center gap-8 py-10 px-6 rounded-xl bg-radial from-gray-900 to-black relative w-full">
         <Image
            width={100}
            height={100}
            className="w-[80] lg:w-[100]"
            src={servico.icone.url}
            alt={`Ícone ilustrando a massagem ${servico.nome}`}
         />
         <h6 className="font-heading font-semibold text-xl lg:text-3xl">{servico.nome}</h6>
         <div className="flex flex-col gap-4">
            {Number(servico.precos?.length) > 0 ? (
               servico.precos?.map((v, k) => (
                  <p key={k}>
                     {v.duracao}............{v.preco}€
                  </p>
               ))
            ) : (
               <p>Valor à Combinar.</p>
            )}
         </div>

         {servico.descricao && (
            <>
               {/* Tooltip do desktop */}
               <div className="absolute right-4 top-4 hidden lg:block">
                  <Tooltip>
                     <TooltipTrigger>
                        <Info className="hover:cursor-pointer" />
                     </TooltipTrigger>
                     <TooltipContent>
                        <div className="max-w-[240px] md:max-w-sm">
                           <p>{servico?.descricao}</p>
                        </div>
                     </TooltipContent>
                  </Tooltip>
               </div>
               {/* Collapsible do Mobile */}
               <Collapsible className="lg:hidden">
                  <CollapsibleTrigger>
                     <Btn>
                        <Info /> Ver detalhes
                     </Btn>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-5">{servico?.descricao}</CollapsibleContent>
               </Collapsible>
            </>
         )}
      </div>
   );
};
export default CardServico;
