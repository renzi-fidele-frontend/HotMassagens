import Container from "@/components/layout/Container";
import Btn from "@/components/shared/Btn";
import { HeadingXl } from "@/components/shared/Typography";
import { terapeutas } from "@/content/data";
import { BedDouble, Calendar, Check, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Terapeuta = async ({ params }: { params: Promise<{ terapeuta: string }> }) => {
   const { terapeuta: id } = await params;
   const terapeuta = terapeutas.find((v) => v.id === id);
   console.log(terapeuta);

   return (
      terapeuta && (
         <div>
            {/* Seção inicial */}
            <div className="bg-linear-to-t from-black to-gray-800 text-gray-200 pt-10 pb-14">
               <Container className="grid grid-cols-2 gap-10">
                  <div>
                     <Image
                        className="h-full max-h-[790] w-full object-cover"
                        width={640}
                        height={400}
                        alt={`Foto da terapeuta ${terapeuta.nome}`}
                        src={terapeuta?.foto}
                     />
                  </div>
                  <div className="flex flex-col justify-center">
                     {/* Intro */}
                     <div className="flex gap-15 w-full h-fit items-center">
                        <HeadingXl>{terapeuta.nome}</HeadingXl>
                        {terapeuta?.disponivel ? (
                           <p className="flex gap-2 text-xl items-center text-green-500 underline underline-offset-5">
                              <Check /> Disponível para atendimento
                           </p>
                        ) : (
                           <p className="flex gap-2 text-xl items-center text-red-600 underline underline-offset-5">
                              <X /> Indisponível
                           </p>
                        )}
                     </div>
                     <div className="flex flex-col gap-7 mt-4">
                        {/* Descrição */}
                        <p>
                           {terapeuta.caracteristicas.idade} anos - {terapeuta.descricao}
                        </p>
                        <hr className="border-gray-600" />
                        {/* Biografia */}
                        <div className="flex flex-col gap-3">
                           {terapeuta.bio.map((v, k) => (
                              <p key={k}>{v}</p>
                           ))}
                        </div>
                        {/* Personalidade */}
                        <div>
                           <h6 className="font-heading font-semibold">Personalidade:</h6>
                           <div>
                              {terapeuta.caracteristicas.personalidade.map((v, k) => (
                                 <p className="flex items-center gap-3" key={k}>
                                    <Check /> {v}
                                 </p>
                              ))}
                           </div>
                        </div>
                        {/* Acões */}
                        <div className="flex gap-6 items-center">
                           <Link href={terapeuta.whatsapp}>
                              <Btn>
                                 <Calendar /> Reserve Agora
                              </Btn>
                           </Link>
                           <Link href="">
                              <Btn variant="dark">
                                 <BedDouble /> Ver Massagens
                              </Btn>
                           </Link>
                        </div>
                     </div>
                  </div>
               </Container>
            </div>
         </div>
      )
   );
};
export default Terapeuta;
