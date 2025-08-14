import Container from "@/components/layout/Container";
import Image from "next/image";
import foto from "@/../public/images/404Optz.webp";
import { HeadingXl } from "@/components/shared/Typography";
import Btn from "@/components/shared/Btn";
import Link from "next/link";
import { Home } from "lucide-react";

// TODO: A página de not-found não é rendereizada quando visito uma rota inexistente
const NotFound = () => {
   return (
      <div className="bg-linear-to-b from-black to-gray-800 pt-10 pb-20">
         <Container className="flex flex-col gap-11 items-center text-center">
            <Image className="w-[80%] sm:w-auto" src={foto} alt="Ilustração de uma boneca dando massagem a um cliente" />
            <HeadingXl>Página não encontrada</HeadingXl>
            <p className="text-lg sm:text-2xl">A página que você procurou não está disponível</p>
            <Link href="/">
               <Btn>
                  <Home /> Regressar ao início
               </Btn>
            </Link>
         </Container>
      </div>
   );
};

export default NotFound;
