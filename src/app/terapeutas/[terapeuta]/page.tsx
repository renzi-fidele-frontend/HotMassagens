import Container from "@/components/layout/Container";
import Btn from "@/components/shared/Btn";
import CardServico from "@/components/shared/CardServico";
import LightBoxCarousel from "@/components/shared/LightBoxCarousel";
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
         <div className="text-gray-200">
            {/* Seção inicial */}
            <div className="bg-linear-to-t from-gray-950 to-gray-800  pt-10 pb-15">
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
                                 <Calendar /> <span className="font-semibold">Reserve Agora</span>
                              </Btn>
                           </Link>
                           <Link href="">
                              <Btn variant="dark">
                                 <BedDouble /> <span className="font-semibold">Ver Massagens</span>
                              </Btn>
                           </Link>
                        </div>
                     </div>
                  </div>
               </Container>
            </div>

            {/* Serviços oferecidos */}
            <div className="bg-[url(/images/bg-smoke.webp)] bg-fixed pt-20 pb-25 text-center">
               <Container>
                  <HeadingXl>Serviços oferecidos</HeadingXl>
                  <div className="grid grid-cols-3 gap-6 mt-12">
                     {terapeuta.servicos.map((v, k) => (
                        <CardServico servico={v} key={k} />
                     ))}
                  </div>
               </Container>
            </div>

            {/* Detalhes do perfil */}
            <div className="bg-linear-to-b from-gray-950 to-gray-800 pt-20 pb-25">
               <Container>
                  <div className="text-center mb-13">
                     <HeadingXl>Detalhes da terapeuta</HeadingXl>
                  </div>
                  <div className="grid gap-10 grid-cols-2">
                     <div>
                        <LightBoxCarousel fotos={terapeuta.galeria} />
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
                     {terapeuta.bio2.map((v, k) => (
                        <p className="text-lg" key={k}>{v}</p>
                     ))}
                  </div>
               </Container>
            </div>
         </div>
      )
   );
};
export default Terapeuta;
