import { ReactNode } from "react";
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
      descricao: string;
   }[];
   galeria: StrapiImage[];
   caracteristicas: {
      idade: number;
      olhos: string;
      altura: number;
      peso: number;
      cabelo: string;
      nacionalidade: string;
      piercings: boolean | null;
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
   distrito: string;
   // Extra Strapi API
   documentId: string;
}

export interface IFaq {
   pergunta: string;
   resposta: string;
}

export interface IBtn {
   children: ReactNode;
   variant?: "dark";
   className?: string;
   type?: "submit" | "reset" | "button";
}

export interface IEmailTemplate {
   nome: string;
   email: string;
   telefone: string;
   mensagem: string;
}

export interface IFiltros {
   localizacao: string[];
   idade: number[];
   altura: number[];
   peso: number[];
   corDosOlhos: string[];
   corDoCabelo: string[];
   nacionalidade: string[];
   usaPiercings?: boolean;
   temTatuagens?: boolean;
   fumante?: boolean;
}

export interface IToggleFiltros {
   localizacao: boolean;
   idade: boolean;
   caracteristicasFisicas: boolean;
   caracteristicasPessoais: boolean;
}
