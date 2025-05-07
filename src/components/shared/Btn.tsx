import { ReactNode } from "react";

const Btn = ({ children }: { children: ReactNode }) => {
   return <button className="bg-linear-to-b from-yellow-100 to-yellow-300 px-3 py-2 text-black rounded">{children}</button>;
};
export default Btn;
