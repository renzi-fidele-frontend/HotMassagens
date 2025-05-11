import { ReactNode } from "react";

const Btn = ({ children }: { children: ReactNode }) => {
   return <button className="flex items-center gap-2 bg-linear-to-b from-yellow-100 to-yellow-300 px-3 py-2 text-black rounded transition hover:scale-110 hover:cursor-pointer text-xl font-medium">{children}</button>;
};
export default Btn;
