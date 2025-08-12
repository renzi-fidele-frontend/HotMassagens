import { IEmailTemplate } from "@/types/global";

export const EmailTemplate: React.FC<Readonly<IEmailTemplate>> = ({ email, mensagem, nome, telefone }) => (
   <div>
      <h1>Chegou novo cliente na Hot Massagens</h1>
      <div className="mt-5 space-y-2">
         <p>
            <b>Nome:</b> {nome}
         </p>
         <p>
            <b>Email:</b> {email}
         </p>
         <p>
            <b>Telefone:</b> {telefone}
         </p>
         <p>
            <b>Mensagem:</b> {mensagem}
         </p>
      </div>
   </div>
);
