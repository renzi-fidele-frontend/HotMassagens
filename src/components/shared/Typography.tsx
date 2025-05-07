import { ReactNode } from "react";

export const HeadingXl = ({ children }: { children: ReactNode }) => <h2 className="font-heading text-6xl">{children}</h2>;

export const HeadingSm = ({ children }: { children: ReactNode }) => <h2 className="font-heading text-2xl">{children}</h2>;
