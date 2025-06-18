import Image from "next/image";
import logo from "@/../public/images/logo.png";

export default function Preloader({ texto }: { texto: string }) {
   return (
      <div className="flex flex-col items-center justify-center gap-15 h-[60dvh] bg-linear-to-b from-black to-gray-800 text-gray-200">
         <Image className="animate-bounce w-[130]" src={logo} alt="Logo do site" />
         <p>{texto}</p>
      </div>
   );
}
