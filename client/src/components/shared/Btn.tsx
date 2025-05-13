import { ReactNode } from "react";

const Btn = ({ children, variant }: { children: ReactNode; variant?: undefined | "dark" }) => {
   function verificarVariante() {
      if (!variant) return "bg-gradiente text-black";
      if (variant === "dark") return "bg-linear-to-r from-gray-500 to-gray-600 text-white";
   }
   
   return (
      <button
         className={`font-heading flex items-center gap-2 px-4 py-2 rounded-xl transition hover:scale-110 hover:cursor-pointer text-xl font-semibold ${verificarVariante()}`}
      >
         {children}
      </button>
   );
};
export default Btn;
