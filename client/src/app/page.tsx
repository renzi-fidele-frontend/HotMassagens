import Image from "next/image";
import { HeadingLg, HeadingXl } from "@/components/shared/Typography";
import Container from "@/components/layout/Container";
import { destaques, faqs } from "@/content/data";
import CardTerapeuta from "@/components/shared/CardTerapeuta";
import star from "@/../public/images/star.png";
import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import Btn from "@/components/shared/Btn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getHome, getTerapeutas } from "@/services/strapi";
import { Suspense } from "react";
import Markdown from "@/components/shared/Markdown";

export default async function Home() {
   const { data: terapeutas } = await getTerapeutas();
   const { data: home } = await getHome();

   return (
      <>
         <div className="bg-linear-to-b from-black to-gray-800 pb-15 lg:pb-20">
            {/* Banner Topo */}
            <div>
               <Image width={1920} height={702} src={home?.data?.BannerTopo[0].url} alt="Banner do topo do site" />
            </div>
            <Container>
               {/* Intro */}
               <div className="text-center pt-8 sm:pt-13 pb-20 text-[16px] sm:text-[19px] text-[#dddddd]" id="sobre">
                  <div className="flex justify-center">
                     <HeadingXl>Bem vindo...</HeadingXl>
                  </div>
                  <div className="mt-5 sm:mt-9 flex flex-col gap-2 sm:gap-3">
                     <Markdown separador="/" texto={home.data.sobre} />
                  </div>
               </div>
               {/* Destaque das terapeutas */}
               <div id="terapeutas">
                  <HeadingXl>Em destaque</HeadingXl>
                  <Suspense
                     fallback={
                        <div className="py-6">
                           <p>Carregando as terapeutas...</p>
                        </div>
                     }
                  >
                     <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4 lg:gap-10">
                        {terapeutas?.map((v, k) => <CardTerapeuta terapeuta={v} key={k} />)}
                     </div>
                  </Suspense>
                  <Link className="w-fit block mx-auto mt-12" href="/terapeutas">
                     <Btn>
                        Ver todas terapeutas <ArrowRight />
                     </Btn>
                  </Link>
               </div>
            </Container>
         </div>

         {/* 5 Estrelas */}
         <div className="w-full text-center bg-[url(https://iili.io/3O8uxKG.jpg)] bg-cover bg-center relative py-15 md:py-40">
            <Container className="flex sm:gap-7 gap-y-7 justify-center z-2 relative *:basis-[50%] sm:*:basis-[33.3%] lg:*:basis-[25%] flex-wrap lg:flex-nowrap ">
               {destaques?.map((v, k) => (
                  <div key={k}>
                     <Image className="w-[50] sm:w-[70] mx-auto mb-5" src={star} alt="Estrela de classificação" />
                     <p className="text-[18px] font-medium">{v}</p>
                  </div>
               ))}
            </Container>
            {/* Opacidade */}
            <div className="bg-black opacity-50 absolute inset-0 z-1"></div>
         </div>

         <div className="bg-linear-to-b from-gray-800 from-[50%] to-black">
            {/* Principais dúvidas */}
            <Container>
               <div className="py-7 sm:py-18 bg-linear-to-b ">
                  <div className="grid lg:grid-cols-2 gap-6 xl:gap-9">
                     <Image
                        src="https://hotmassages.pt/wp-content/uploads/2024/08/blog-banner.png"
                        width={600}
                        height={450}
                        alt="Uma terapeuta no sofá"
                        className="object-cover h-full w-full lg:w-auto"
                     />
                     <div>
                        <HeadingLg>Principais Dúvidas</HeadingLg>
                        <Accordion className="mt-3" type="single" collapsible>
                           {faqs?.map((v, k) => (
                              <AccordionItem value={"item-" + k + 1} key={k}>
                                 <AccordionTrigger className="text-lg sm:text-xl hover:cursor-pointer text-gray-200">
                                    {v.pergunta}
                                 </AccordionTrigger>
                                 <AccordionContent className="text-gray-300 sm:text-[17px]">{v.resposta}</AccordionContent>
                              </AccordionItem>
                           ))}
                        </Accordion>
                     </div>
                  </div>
                  <div className="text-center text-gray-200 mt-14 flex flex-col gap-3">
                     <p>Aviso:</p>
                     <p>
                        O Grupo Oásis Hot Massages atua exclusivamente como uma plataforma de divulgação para as terapeutas independentes, sem
                        qualquer vínculo empregatício com as profissionais anunciadas. Nossa responsabilidade é limitada à promoção dos serviços
                        de massagem erótica e sensual, sendo que as terapeutas são responsáveis por todos os aspectos relacionados ao
                        atendimento.
                     </p>
                     <p>Agradecemos a compreensão e confiança em nossos serviços.</p>
                  </div>
               </div>
            </Container>
         </div>
      </>
   );
}
