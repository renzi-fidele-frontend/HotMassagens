import { Iterapeuta } from "@/types/global";

export async function getTerapeutas() {
   const res = await fetch(`${process.env.STRAPI_URL}/api/terapeutas?fields[0]=nome&fields[1]=endereco_curto&populate=foto`, {
      cache: "force-cache",
   });
   const data = await res.json();

   return { data: data.data as Iterapeuta[] };
}
