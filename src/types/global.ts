import { StaticImageData } from "next/image";

export interface Iterapeuta {
   foto: string | StaticImageData;
   nome: string;
   id: string;
   endereco_curto: string;
}
