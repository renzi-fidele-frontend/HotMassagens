import { ReactNode } from "react";

const Btn = ({ children, variant }: { children: ReactNode; variant?: undefined | "dark" }) => {
   return (
      <button
         className={`flex items-center gap-2 bg-linear-to-br ${!variant && "from-yellow-100 to-yellow-300 text-black"} ${
            variant === "dark" && "from-gray-500 to-gray-600 text-white"
         } px-4 py-2  rounded-xl transition hover:scale-110 hover:cursor-pointer text-xl font-medium`}
      >
         {children}
      </button>
   );
};
export default Btn;
