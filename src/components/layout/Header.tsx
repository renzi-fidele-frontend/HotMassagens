import Image from "next/image";
import Container from "./Container";
import logo from "@/../public/images/logo.png";
import Link from "next/link";

interface ILink {
   href: string;
   name: string;
}

const links: ILink[] = [
   { href: "", name: "Home" },
   { href: "", name: "Sobre nós" },
   { href: "", name: "Terapeutas" },
   { href: "", name: "Contato" },
];

const Header = () => {
   return (
      <header className="bg-[#070707] py-4">
         <Container>
            <div className="flex items-center justify-between">
               <Image className="w-[160px]" src={logo} alt="" />
               <nav className="flex items-center gap-8 text-xl font-body font-medium">
                  {links.map((v, k) => (
                     <Link className="" href={v.href} key={k}>
                        {v.name}
                     </Link>
                  ))}
                  <Link className="bg-linear-to-b from-yellow-100 to-yellow-300 px-3 py-2 text-black rounded" href="">Portal da Terapeuta</Link>
               </nav>
            </div>
         </Container>
      </header>
   );
};
export default Header;
