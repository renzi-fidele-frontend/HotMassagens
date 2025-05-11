import { StaticImageData } from "next/image";

export interface Iterapeuta {
   foto: string | StaticImageData;
   nome: string;
   id: string;
   endereco_curto: string;
   whatsapp: string;
   descricao: string;
   /** Cada item será um parágrafo */
   bio: string[];
   bio2: string[];
   disponivel: boolean;
   servicos: {
      icone: StaticImageData;
      nome: string;
      precos?: { duracao: string; preco: number }[];
   }[];
   galeria: (StaticImageData | string)[];
   caracteristicas: {
      idade: number;
      personalidade: string[];
      olhos: string;
      altura: number;
      peso: number;
      cabelo: string;
      nacionalidade: string;
      piercings: boolean;
      tatuagens: string;
      gluteos: string;
      fumante: boolean;
      perfume: string;
      lingerie: string;
   };
   localDeAtendimento: {
      descricao: string[];
      horario: string[];
      fotos: (StaticImageData | string)[];
   };
}

export interface IFaq {
   pergunta: string;
   resposta: string;
}
