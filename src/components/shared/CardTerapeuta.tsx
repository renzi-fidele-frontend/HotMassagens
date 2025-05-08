import Image from "next/image";
import { HeadingSm } from "./Typography";
import { Iterapeuta } from "@/types/global";

const CardTerapeuta = ({ terapeuta }: { terapeuta: Iterapeuta }) => {
   return (
      <div>
         <Image width={325} height={500} className="w-full object-cover h-full max-h-[600]" src={terapeuta.foto} alt={`Foto da terapeuta: ${terapeuta.nome}`} />
         <div className="mt-6 mb-1">
            <HeadingSm>{terapeuta.nome}</HeadingSm>
         </div>
         <p>{terapeuta.endereco_curto}</p>
      </div>
   );
};
export default CardTerapeuta;
