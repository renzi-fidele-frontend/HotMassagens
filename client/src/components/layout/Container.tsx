import { ReactNode } from "react";

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
   return <div className={"w-full max-w-7xl mx-auto px-3 lg:px-5 2xl:px-0 " + className}>{children}</div>;
};
export default Container;
