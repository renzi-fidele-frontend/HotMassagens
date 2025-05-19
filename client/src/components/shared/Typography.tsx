import { ReactNode } from "react";

export const HeadingXl = ({ children }: { children: ReactNode }) => (
   <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl gradiente w-fit">{children}</h2>
);

export const HeadingLg = ({ children }: { children: ReactNode }) => (
   <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl  gradiente w-fit">{children}</h2>
);

export const HeadingSm = ({ children }: { children: ReactNode }) => <h2 className="font-heading text-2xl gradiente w-fit">{children}</h2>;
