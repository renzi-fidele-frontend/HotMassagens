import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ReactNode } from "react";
import { IToggleFiltros } from "@/types/global";

interface ISecaoCollapsivel {
   titulo: string;
   onOpenChange: () => void;
   filtros: IToggleFiltros;
   children: ReactNode;
   mostrar: boolean;
}

const SecaoCollapsivel = ({ titulo, onOpenChange, filtros, children, mostrar }: ISecaoCollapsivel) => {
   return (
      <Collapsible open={mostrar} onOpenChange={onOpenChange}>
         <div className="border border-zinc-500 rounded-xl">
            {/* Head */}
            <CollapsibleTrigger asChild>
               <div className="flex items-center justify-between p-6 pb-4 hover:bg-gray-900 rounded-[inherit] hover:cursor-pointer">
                  <h6 className="text-lg font-bold">{titulo}</h6>
                  {mostrar ? <ChevronUp /> : <ChevronDown />}
               </div>
            </CollapsibleTrigger>
            {/* Body */}
            <CollapsibleContent className="px-6 pb-6">{children}</CollapsibleContent>
         </div>
      </Collapsible>
   );
};
export default SecaoCollapsivel;
