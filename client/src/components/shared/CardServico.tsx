import { Iterapeuta } from "@/types/global";
import Image from "next/image";

// TODO: Arranjar um jeito de demostrar a descrição da massagem
const CardServico = ({ servico }: { servico: Iterapeuta["servicos"][0] }) => {
   return (
      <div className="flex flex-col items-center gap-8 py-10 px-6 rounded-xl bg-radial from-gray-900 to-black">
         <Image
            width={100}
            height={100}
            className="w-[80] lg:w-[100]"
            src={servico.icone.url}
            alt={`Ícone ilustrando a massagem ${servico.nome}`}
         />
         <h6 className="font-heading font-semibold text-xl lg:text-3xl">{servico.nome}</h6>
         <div className="flex flex-col gap-4">
            {servico.precos ? (
               servico.precos?.map((v, k) => (
                  <p key={k}>
                     {v.duracao}............{v.preco}€
                  </p>
               ))
            ) : (
               <p>Valor à Combinar.</p>
            )}
         </div>
      </div>
   );
};
export default CardServico;
