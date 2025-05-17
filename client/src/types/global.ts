import { StrapiImage } from "./strapi";

export interface Iterapeuta {
   foto: StrapiImage;
   nome: string;
   id: string;
   endereco_curto: string;
   whatsapp: string;
   descricao: string;
   bio: string;
   bio2: string;
   disponivel: boolean;
   servicos: {
      icone: StrapiImage;
      nome: string;
      precos?: { duracao: string; preco: number }[];
   }[];
   galeria: StrapiImage[];
   caracteristicas: {
      idade: number;
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
      descricao: string;
      horario: string;
      fotos: StrapiImage[];
   };
   personalidades: { nome: string; id: number }[];
   // Extra Strapi API
   documentId: string;
}

export interface IFaq {
   pergunta: string;
   resposta: string;
}
