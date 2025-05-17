import { Iterapeuta } from "@/types/global";
import qs from "qs";

export async function getTerapeutas() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/terapeutas?fields[0]=nome&fields[1]=endereco_curto&populate=foto`, {
      cache: "force-cache",
   });
   const data = await res.json();

   return { data: data.data as Iterapeuta[] };
}

export async function getTerapeuta(id: string) {
   const query = qs.stringify(
      {
         populate: [
            "foto",
            "galeria",
            "servicos",
            "servicos.precos",
            "servicos.icone",
            "caracteristicas",
            "localDeAtendimento",
            "localDeAtendimento.fotos",
            "personalidades",
         ],
         fields: ["nome", "endereco_curto", "whatsapp", "descricao", "bio", "bio2", "disponivel"],
      },
      { encodeValuesOnly: true }
   );
   const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/terapeutas/${id}?${query}`, { cache: "force-cache" });
   const data = await res.json();

   return { data: data.data as Iterapeuta };
}

export function processarFoto(path: string) {
   return process.env.NEXT_PUBLIC_STRAPI_URL + path;
}
