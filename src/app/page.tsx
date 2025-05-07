import Image from "next/image";

import { HeadingXl } from "@/components/shared/Typography";
import Container from "@/components/layout/Container";
import { terapeutas } from "@/content/data";
import CardTerapeuta from "@/components/shared/CardTerapeuta";

export default function Home() {
   return (
      <div className="bg-linear-to-b from-black to-gray-800">
         {/* Banner Topo */}
         <div>
            <Image width={1920} height={702} src="https://iili.io/3OksTZv.webp" alt="Banner do topo do site" />
         </div>
         <Container>
            {/* Intro */}
            <div className="text-center pt-13 pb-20 text-[17px] text-[#dddddd]">
               <HeadingXl>Bem vindo...</HeadingXl>
               <div className="mt-9 flex flex-col gap-3">
                  <p>Aqui você encontra as melhores massagistas, terapeutas e SPA’s de topo no distrito de Lisboa.</p>
                  <p>Excelência, segurança e discrição são nossos pilares base. Todas as terapeutas possuem identidade verificada.</p>
                  <p>
                     Seja em hotéis, gabinetes privados ou spas de luxo, as terapeutas proporcionarão momentos de pura indulgência e relaxamento,
                     com massagens hots que são verdadeiras obras de arte.
                  </p>
                  <p>Encontre a terapeuta que gosta e sinta a experiência inigualável dos melhores serviços de bem-estar e prazer.</p>
               </div>
            </div>
            {/* Destaque */}
            <div className="pb-13">
               <HeadingXl>Em destaque</HeadingXl>
               <div className="mt-12 grid grid-cols-3 gap-5 gap-y-7">
                  {terapeutas.map((v, k) => (
                     <CardTerapeuta terapeuta={v} key={k} />
                  ))}
               </div>
            </div>
         </Container>
      </div>
   );
}
