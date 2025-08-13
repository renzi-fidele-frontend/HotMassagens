import { IBtn } from "@/types/global";

const Btn = ({ children, variant, className, type, onClick }: IBtn) => {
   function verificarVariante() {
      if (!variant) return "bg-gradiente text-black";
      if (variant === "dark") return "bg-linear-to-r from-gray-500 to-gray-600 text-white";
   }

   return (
      <button
         type={type}
         className={`${className} font-heading flex items-center gap-2 px-4 py-2 rounded-xl transition hover:scale-110 hover:cursor-pointer text-xl font-semibold ${verificarVariante()}`}
         onClick={onClick}
      >
         {children}
      </button>
   );
};
export default Btn;
