import { ReactNode } from "react";

export const HeadingXl = ({ children }: { children: ReactNode }) => <h2 className="font-heading text-6xl gradiente w-fit">{children}</h2>;

export const HeadingLg = ({ children }: { children: ReactNode }) => <h2 className="font-heading text-5xl gradiente w-fit">{children}</h2>;

export const HeadingSm = ({ children }: { children: ReactNode }) => <h2 className="font-heading text-2xl gradiente w-fit">{children}</h2>;
