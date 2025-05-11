import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import logo from "@/../public/images/logo.png";

const Footer = () => {
   return (
      <footer className="bg-black pt-5 pb-12 text-gray-200">
         <Container>
            <div className="flex justify-between">
               {/* Identidade */}
               <div className="basis-[25%]">
                  <Image className="w-[210px]" src={logo} alt="Logo da Hot Massagens" />
                  <p className="mt-5 text-gray-300">
                     Aqui você encontra as melhores massagistas, terapeutas e SPA’s de topo no distrito de Lisboa.
                  </p>
               </div>
               {/* Mapa do site */}
               <div>
                  <h6 className="font-heading font-semibold">Mapa do site</h6>
                  <div className="flex flex-col mt-4 gap-3">
                     <Link href="">Início</Link>
                     <Link href="">Sobre</Link>
                     <Link href="">Terapeutas</Link>
                     <Link href="">Contato</Link>
                  </div>
               </div>
               {/* Informações de contato */}
               <div>
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
               <div>
                  <h6 className="font-heading font-semibold">Redes Sociais</h6>
                  <div className="flex *:p-3 *:bg-gray-800 *:rounded gap-3 mt-4">
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
            <div className="flex justify-center gap-15 font-heading my-10">
               <Link href="">Aviso Legal</Link>
               <Link href="">Política de Cookies</Link>
               <Link href="">Políticas de Cancelamento</Link>
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
