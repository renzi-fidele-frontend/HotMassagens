import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

import { ReactNode } from "react";

interface ISecaoCollapsivel {
   titulo: string;
   onOpenChange: () => void;
   children: ReactNode;
   mostrar: boolean;
}

const SecaoCollapsivel = ({ titulo, onOpenChange, children, mostrar }: ISecaoCollapsivel) => {
   return (
      <Collapsible open={mostrar} onOpenChange={onOpenChange}>
         <div className="border border-zinc-500 rounded-xl">
            {/* Head */}
            <CollapsibleTrigger asChild>
               <div className="flex items-center justify-between p-4 sm:p-6 pb-4 hover:bg-gray-900 rounded-[inherit] hover:cursor-pointer">
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
