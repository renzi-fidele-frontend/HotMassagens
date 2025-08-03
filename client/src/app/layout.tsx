import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FiltrosProvider from "@/context/Provider";

const bodyFont = Plus_Jakarta_Sans({
   variable: "--font-plus-jakarta",
   subsets: ["latin"],
});

const headingFont = localFont({
   src: [
      { path: "../../public/fonts/ArsenicaTrial-Bold.ttf", weight: "700", style: "normal" },
      { path: "../../public/fonts/ArsenicaTrial-BoldItalic.ttf", weight: "700", style: "italic" },
      { path: "../../public/fonts/ArsenicaTrial-Italic.ttf", weight: "400", style: "italic" },
      { path: "../../public/fonts/ArsenicaTrial-Regular.ttf", weight: "400", style: "normal" },
   ],
   variable: "--font-arsenica",
});

export const metadata: Metadata = {
   title: "Hot Massagens",
   description: "Aqui você encontra as melhores massagistas, terapeutas e SPA’s de topo no distrito de Lisboa.",
   authors: [{ name: "Renzi Fidele", url: "https://github.com/renzi-fidele-frontend" }],
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-PT">
         <body className={`${headingFont.variable} ${bodyFont.variable} text-white antialiased font-body`}>
            <FiltrosProvider>
               <Header />
               <main>{children}</main>
               <Footer />
            </FiltrosProvider>
         </body>
      </html>
   );
}
