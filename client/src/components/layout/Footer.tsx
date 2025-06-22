import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import logo from "@/../public/images/logo.png";

const Footer = () => {
   return (
      <footer className="bg-black pt-7 pb-12 text-gray-200">
         <Container>
            <div className="flex justify-between flex-wrap lg:flex-nowrap md:px-6 lg:px-0">
               {/* Identidade */}
               <div className="basis-[100%] lg:basis-[25%] flex flex-col items-center lg:items-start">
                  <Image className="w-[210px]" src={logo} alt="Logo da Hot Massagens" />
                  <p className="mt-5 mb-6 lg:mb-0 text-gray-300 text-center lg:text-start">
                     Aqui você encontra as melhores massagistas, terapeutas e SPA’s de topo no distrito de Lisboa.
                  </p>
               </div>
               {/* Mapa do site */}
               <div className="basis-[100%] lg:basis-[auto] flex flex-col items-center lg:items-start">
                  <h6 className="font-heading font-semibold">Mapa do site</h6>
                  <div className="flex text-lg sm:text-xl lg:text-base lg:flex-col mt-4 mb-7 lg:mb-0 gap-5 lg:gap-3 underline lg:no-underline flex-wrap sm:flex-nowrap justify-center">
                     <Link href="/">Início</Link>
                     <Link href="/#sobre">Sobre</Link>
                     <Link href="/#terapeutas">Terapeutas</Link>
                     <Link href="/contato">Contato</Link>
                  </div>
               </div>
               {/* Informações de contato */}
               <div className="text-center lg:text-start basis-[100%] lg:basis-[auto]">
                  <h6 className="font-heading font-semibold">Informações de contato</h6>
                  <div className="flex flex-col mt-4 gap-3">
                     <Link target="_blank" href="tel:+351910872391">
                        Ligações: +351 910 872 391{" "}
                     </Link>
                     <Link target="_blank" href="http://wa.me/351961180949">
                        Whats APP: +351 961 180 949
                     </Link>
                     <Link target="_blank" href="mailto:contacto@hotmassages.pt">
                        Email: contacto@hotmassages.pt
                     </Link>
                  </div>
               </div>
               {/* Redes sociais */}
               <div className="text-center lg:text-start basis-[100%] lg:basis-[auto] mt-5 lg:mt-0">
                  <h6 className="font-heading font-semibold">Redes Sociais</h6>
                  <div className="flex *:p-3 *:bg-gray-800 *:rounded gap-3 mt-4 justify-center lg:justify-normal">
                     <Link href="https://www.facebook.com/profile.php?id=61563681704143" target="_blank">
                        <Facebook />
                     </Link>
                     <Link href="https://www.instagram.com/hotmassagesofc2" target="_blank">
                        <Instagram />
                     </Link>
                  </div>
               </div>
            </div>
            {/* Políticas */}
            <div className="flex justify-center flex-wrap md:flex-nowrap gap-7 md:gap-15 font-heading my-10 *:underline lg:*:no-underline">
               <Link href="#">Aviso Legal</Link>
               <Link href="/politica_de_cookies">Política de Cookies</Link>
               <Link href="">Políticas de Privacidade</Link>
               <Link href="">Termos de Uso</Link>
            </div>
            <div className="text-center">
               <p>2024 Hot Massages © Todos os direitos reservados</p>
               <p className="mt-2">
                  Desenvolvido por <Link href="">Oasis Agency Publicidade</Link>
               </p>
            </div>
         </Container>
      </footer>
   );
};
export default Footer;
