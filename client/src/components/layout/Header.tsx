import Image from "next/image";
import Container from "./Container";
import logo from "@/../public/images/logo.png";
import Link from "next/link";
import Btn from "../shared/Btn";
import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";

interface ILink {
   href: string;
   name: string;
}

const links: ILink[] = [
   { href: "/", name: "Início" },
   { href: "/#sobre", name: "Sobre nós" },
   { href: "/terapeutas", name: "Terapeutas" },
   { href: "/contato", name: "Contato" },
];

const MyNav = () => (
   <nav className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8 text-2xl lg:text-xl font-medium mt-5 lg:mt-0 ">
      {links.map((v, k) => (
         <Link href={v.href} key={k}>
            {v.name}
         </Link>
      ))}
      <Link href="">
         <Btn>Portal da Terapeuta</Btn>
      </Link>
   </nav>
);

const Header = () => {
   return (
      <header className="bg-[#070707] py-2 md:py-4">
         <Container>
            <div className="flex items-center justify-between">
               <Link href="/">
                  <Image className="w-[110px] sm:w-[130px] lg:w-[160px]" src={logo} alt="" />
               </Link>
               {/* NavDesktop */}
               <div className="hidden lg:flex">
                  <MyNav />
               </div>
               <div className="lg:hidden flex items-center">
                  {/* NavMobile */}
                  <Drawer direction="top">
                     <DrawerTrigger asChild className="hover:cursor-pointer">
                        <Menu className="me-[-4px] size-10 sm:size-12" />
                     </DrawerTrigger>
                     <DrawerContent className="bg-black text-center py-7">
                        <DrawerHeader>
                           <DrawerTitle className="flex justify-center mb-4">
                              <Image className="w-[200]" src={logo} alt="Logo do site da Hot massagens" />
                           </DrawerTitle>
                           <DrawerDescription className="text-gray-300">
                              Aqui você encontra as melhores massagistas, terapeutas e SPA’s de topo no distrito de Lisboa.
                           </DrawerDescription>
                           <MyNav />
                        </DrawerHeader>
                     </DrawerContent>
                  </Drawer>
               </div>
            </div>
         </Container>
      </header>
   );
};
export default Header;
