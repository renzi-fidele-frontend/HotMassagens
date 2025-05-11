import { HeadingXl } from "@/components/shared/Typography";
import { terapeutas } from "@/content/data";
import { Check, X } from "lucide-react";
import Image from "next/image";

const Terapeuta = async ({ params }: { params: Promise<{ terapeuta: string }> }) => {
   const { terapeuta: id } = await params;
   const terapeuta = terapeutas.find((v) => v.id === id);
   console.log(terapeuta);

   return (
      <div>
         {/* Seção inicial */}
         <div className="grid grid-cols-2 bg-linear-to-b from-black to-gray-800">
            <Image alt="" src="" />
            <div className="flex">
               <div className="flex gap-4">
                  <HeadingXl>{terapeuta?.nome}</HeadingXl>
                  <p>
                     {terapeuta?.disponivel ? (
                        <>
                           <Check /> Disponível
                        </>
                     ) : (
                        <>
                           <X /> Indisponível
                        </>
                     )}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Terapeuta;
