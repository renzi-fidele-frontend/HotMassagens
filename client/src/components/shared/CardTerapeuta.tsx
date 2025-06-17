import Image from "next/image";
import { HeadingSm } from "./Typography";
import { Iterapeuta } from "@/types/global";
import Link from "next/link";

const CardTerapeuta = ({ terapeuta }: { terapeuta: Iterapeuta }) => {
   return (
      <div className="h-fit transition hover:bg-gray-800 lg:hover:scale-105">
         <Link href={`/terapeutas/${terapeuta?.documentId}`}>
            <Image
               width={325}
               height={500}
               className="w-full object-cover h-[300] sm:h-[480]"
               src={String(terapeuta?.foto?.formats?.large?.url)}
               alt={`Foto da terapeuta: ${terapeuta.nome}`}
            />
            <div className="mt-5 mb-1">
               <HeadingSm>{terapeuta.nome}</HeadingSm>
            </div>
            <p className="truncate">{terapeuta.endereco_curto}</p>
         </Link>
      </div>
   );
};
export default CardTerapeuta;
