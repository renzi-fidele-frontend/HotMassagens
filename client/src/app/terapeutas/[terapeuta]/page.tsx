import Container from "@/components/layout/Container";
import Btn from "@/components/shared/Btn";
import CardServico from "@/components/shared/CardServico";
import LightBoxCarousel from "@/components/shared/LightBoxCarousel";
import Markdown from "@/components/shared/Markdown";
import { HeadingXl } from "@/components/shared/Typography";
import { getTerapeuta } from "@/services/strapi";
import { BedDouble, Calendar, Check, Clock, MapPin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Terapeuta = async ({ params }: { params: Promise<{ terapeuta: string }> }) => {
   const { terapeuta: id } = await params;
   const { data: terapeuta } = await getTerapeuta(id);

   return (
      <div className="text-gray-200">
         {/* Seção inicial */}
         <div className="bg-linear-to-t from-gray-950 to-gray-800  pt-0 lg:pt-10 pb-15">
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               <div>
                  {/* Galeria Desktop */}
                  <div className="h-full hidden lg:block">
                     <LightBoxCarousel fotos={terapeuta.galeria} />
                  </div>
               </div>
               <div className="flex flex-col justify-center">
                  {/* Intro */}
                  <div className="flex gap-15 w-full h-fit items-center">
                     <HeadingXl>{terapeuta.nome}</HeadingXl>
                     {terapeuta?.disponivel ? (
                        <p className="flex gap-2 items-center px-2 py-1 rounded-xl bg-green-950 text-green-500 border border-gray-500">
                           <Check /> Disponível para atendimento
                        </p>
                     ) : (
                        <p className="flex gap-2 items-center px-2 py-1 rounded-xl bg-red-950 text-red-500 border border-gray-700">
                           <X /> Indisponível
                        </p>
                     )}
                  </div>
                  <div className="flex flex-col gap-6 sm:gap-9 mt-4">
                     {/* Descrição */}
                     <p>
                        {terapeuta.caracteristicas.idade} anos <span className="mx-2">•</span>{" "}
                        <span className="italic">{terapeuta.descricao}</span>
                     </p>
                     <hr className="border-gray-600" />
                     {/* Galeria Mobile */}
                     <div className="h-fit max-h-[600] lg:max-h-full lg:hidden">
                        <LightBoxCarousel fotos={terapeuta.galeria} />
                     </div>
                     {/* Biografia */}
                     <div className="flex flex-col gap-3">
                        <Markdown texto={terapeuta.bio} separador="\n\n" />
                     </div>
                     {/* Personalidade */}
                     <div>
                        <h6 className="font-heading font-semibold text-lg">Personalidade:</h6>
                        <div className="flex flex-wrap sm:flex-nowrap gap-2 mt-2">
                           {terapeuta.personalidades.map((v, k) => (
                              <p
                                 className="border w-fit py-1 px-3 rounded-2xl border-gray-500 flex items-center gap-3 text-sm font-medium"
                                 key={k}
                              >
                                 <span className="text-amber-200">
                                    <Check size={16} />
                                 </span>{" "}
                                 {v.nome}
                              </p>
                           ))}
                        </div>
                     </div>
                     {/* Acões */}
                     <div className="mt-4 sm:mt-0 flex gap-4 sm:gap-6 items-center flex-wrap sm:flex-nowrap *:basis-full sm:*:basis-auto ">
                        <Link href={terapeuta.whatsapp}>
                           <Btn className="w-full sm:w-fit justify-center sm:justify-start">
                              <Calendar /> <span className="font-semibold">Reserve Agora</span>
                           </Btn>
                        </Link>
                        <Link href="#servicos">
                           <Btn className="w-full sm:w-fit justify-center sm:justify-start" variant="dark">
                              <BedDouble /> <span className="font-semibold">Ver Massagens</span>
                           </Btn>
                        </Link>
                     </div>
                  </div>
               </div>
            </Container>
         </div>

         {/* Serviços oferecidos */}
         <div className="bg-[url(/images/bg-smoke.webp)] bg-fixed pt-10 pb-20 lg:pb-25 lg:pt-20 text-center" id="servicos">
            <Container>
               <div className="flex justify-center">
                  <HeadingXl>Serviços oferecidos</HeadingXl>
               </div>
               <div className="flex *:sm:basis-[48%] *:lg:basis-[31%] flex-wrap gap-6 mt-12 justify-center">
                  {terapeuta.servicos.map((v, k) => (
                     <CardServico servico={v} key={k} />
                  ))}
               </div>
            </Container>
         </div>

         {/* Detalhes do perfil */}
         <div className="bg-linear-to-t from-gray-950 to-gray-800 pt-10 pb-15 lg:pt-20 lg:pb-25">
            <Container>
               <div className="flex justify-center mb-8 md:mb-13">
                  <HeadingXl>Detalhes da terapeuta</HeadingXl>
               </div>
               <div className="grid gap-10 md:grid-cols-2">
                  <div>
                     <Image
                        className="h-full max-h-[640] w-full object-contain md:object-cover rounded-md"
                        width={640}
                        height={400}
                        alt={`Foto da terapeuta ${terapeuta.nome}`}
                        src={terapeuta?.foto.url}
                     />
                  </div>
                  {/* Caraterísticas da terapeuta */}
                  <div className="grid grid-cols-2 gap-4 *:bg-linear-to-br *:from-gray-700 *:to-gray-900 *:border *:border-gray-600 *:p-4 *:rounded-lg *:backdrop-blur-sm ">
                     <div>
                        <div className="text-zinc-400 text-sm mb-1">Idade</div>
                        <p className="font-semibold ">28</p>
                     </div>
                     <div>
                        <div className="text-zinc-400 text-sm mb-1">Piercings</div>
                        <p className="font-semibold ">Não</p>
                     </div>
                     <div>
                        <div className="text-zinc-400 text-sm mb-1">Olhos</div>
                        <p className="font-semibold ">Castanhos</p>
                     </div>
                     <div>
                        <div className="text-zinc-400 text-sm mb-1">Tatuagens</div>
                        <p className="font-semibold ">2</p>
                     </div>
                     <div>
                        <div className="text-zinc-400 text-sm mb-1">Altura</div>
                        <p className="font-semibold ">1,69 M</p>
                     </div>
                     <div>
                        <div className="text-zinc-400 text-sm mb-1">Quadris</div>
                        <p className="font-semibold ">Grandes</p>
                     </div>
                     <div>
                        <div className="text-zinc-400 text-sm mb-1">Peso</div>
                        <p className="font-semibold ">67 kg</p>
                     </div>
                     <div>
                        <div className="text-zinc-400 text-sm mb-1">Fumante</div>
                        <p className="font-semibold ">Não</p>
                     </div>
                     <div>
                        <div className="text-zinc-400 text-sm mb-1">Cabelo</div>
                        <p className="font-semibold ">Preto</p>
                     </div>
                     <div>
                        <div className="text-zinc-400 text-sm mb-1">Perfume</div>
                        <p className="font-semibold ">Adocicado</p>
                     </div>
                     <div>
                        <div className="text-zinc-400 text-sm mb-1">Nacionalidade</div>
                        <p className="font-semibold ">Brasileira</p>
                     </div>
                     <div>
                        <div className="text-zinc-400 text-sm mb-1">Lingerie</div>
                        <p className="font-semibold ">Várias</p>
                     </div>
                  </div>
               </div>
               <div className="text-center flex flex-col gap-3 mt-7">
                  <p className="text-lg">{terapeuta.bio2}</p>
               </div>
            </Container>
         </div>

         {/* Local de atendimento */}
         <div className="bg-linear-to-t from-gray-950 to-gray-800 pt-10 pb-15 sm:pt-20 sm:pb-25 text-gray-200 text-center">
            <Container>
               <div className="flex justify-center">
                  <HeadingXl>Detalhes do Local</HeadingXl>
               </div>
               <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-14">
                  <div>
                     <LightBoxCarousel fotos={terapeuta.localDeAtendimento.fotos} />
                  </div>
                  <div className="flex flex-col gap-10 text-center items-center justify-center sm:text-lg">
                     {/* Local de atendimento */}
                     <div className="flex flex-col gap-3">
                        <h6 className="flex items-center justify-center gap-3 text-2xl font-medium mb-4">
                           {<MapPin className="text-amber-300" />} Local de atendimento
                        </h6>
                        <div className="flex flex-col gap-2">
                           <p>
                              <Markdown separador="\" texto={terapeuta.localDeAtendimento.descricao} />{" "}
                           </p>
                        </div>
                     </div>
                     <hr className="border-gray-700 w-full" />
                     {/* Horários de atendimento */}
                     <div>
                        <h6 className="flex items-center justify-center gap-3 text-2xl font-medium mb-4">
                           {<Clock className="text-amber-300" />} Horários de atendimento
                        </h6>
                        <div className="flex flex-col gap-2">
                           <Markdown separador="\" texto={terapeuta.localDeAtendimento.horario} />
                        </div>
                     </div>
                     <Btn>Reserve Agora</Btn>
                  </div>
               </div>
            </Container>
         </div>
      </div>
   );
};
export default Terapeuta;
