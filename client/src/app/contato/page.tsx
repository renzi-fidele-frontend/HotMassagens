import Container from "@/components/layout/Container";
import { HeadingXl } from "@/components/shared/Typography";
import Image from "next/image";
import { getContato } from "@/services/strapi";
import ContactForm from "../../components/shared/ContactForm";

export default async function Contato() {
   const { data: contato } = await getContato();

   return (
      <div className="bg-linear-to-t from-gray-950 to-gray-800">
         <Container className="py-10 sm:py-15 flex flex-col lg:flex-row gap-12 xl:gap-[auto]">
            <div>
               <HeadingXl>Entre em contato</HeadingXl>
               <div className="xl:text-lg mt-3 mb-5">
                  <p>
                     Estamos aqui para ajudar! Se você tiver qualquer dúvida, sugestão ou precisar de assistência, sinta-se à vontade para nos
                     contatar.
                  </p>
                  <p>Basta preencher o formulário e nossa equipe entrará em contato com você o mais breve possível.</p>
                  {/* Foto Mobile */}
                  <Image
                     className="rounded lg:hidden mt-6 w-[80%] sm:w-auto"
                     width={520}
                     height={580}
                     src={contato?.data?.foto?.url}
                     alt="Foto de contato"
                  />
               </div>
               <ContactForm />
            </div>
            {/* Foto Desktop */}
            <Image className="rounded border-4 hidden lg:block" width={520} height={580} src={contato?.data?.foto?.url} alt="Foto de contato" />
         </Container>
      </div>
   );
}
