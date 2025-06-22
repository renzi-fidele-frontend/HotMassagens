import Container from "@/components/layout/Container";
import { HeadingSm, HeadingXl } from "@/components/shared/Typography";

const page = () => {
   return (
      <div className="bg-linear-to-b from-black to-gray-800 pt-10 pb-20">
         <Container>
            <HeadingXl>Aviso Legal</HeadingXl>
            <div className="space-y-4 mt-4">
               <section>
                  <HeadingSm>Informações Gerais</HeadingSm>
                  <p>
                     Este site tem como objetivo fornecer informações e facilitar o contato entre profissionais e clientes interessados em
                     serviços de massagem. Não nos responsabilizamos por eventuais danos, prejuízos ou consequências decorrentes do uso das
                     informações aqui disponibilizadas.
                  </p>
                  <p>
                     Todo o conteúdo publicado é de responsabilidade dos anunciantes e usuários. Recomendamos que todas as partes envolvidas ajam
                     com ética, respeito e dentro dos limites da legislação vigente.
                  </p>
                  <p>Ao utilizar este site, você concorda com estes termos e reconhece que é responsável por suas próprias decisões e ações.</p>
                  <p>
                     Em caso de dúvidas ou para reportar qualquer irregularidade, entre em contato conosco através dos canais oficiais
                     disponíveis na plataforma.
                  </p>
               </section>
               <section>
                  <HeadingSm>Limitação de Responsabilidade</HeadingSm>
                  <p>
                     Não garantimos a veracidade, exatidão ou atualização das informações fornecidas pelos anunciantes. Cabe ao usuário verificar
                     a autenticidade dos dados e a idoneidade dos profissionais antes de contratar qualquer serviço.
                  </p>
                  <p>
                     O site não realiza intermediação financeira, não participa das negociações e não interfere na relação entre profissionais e
                     clientes. Qualquer acordo firmado é de inteira responsabilidade das partes envolvidas.
                  </p>
               </section>
               <section>
                  <HeadingSm>Direitos Autorais e Propriedade Intelectual</HeadingSm>
                  <p>
                     Todo o conteúdo, marcas, logotipos, imagens e textos presentes neste site são protegidos por direitos autorais e demais
                     legislações aplicáveis. É proibida a reprodução, distribuição ou uso não autorizado de qualquer material sem consentimento
                     prévio.
                  </p>
               </section>
               <section>
                  <HeadingSm>Alterações no Aviso Legal</HeadingSm>
                  <p>
                     Reservamo-nos o direito de modificar este aviso legal a qualquer momento, sem aviso prévio. Recomendamos que o usuário
                     revise periodicamente esta página para estar ciente de eventuais alterações.
                  </p>
               </section>
               <section>
                  <HeadingSm>Legislação Aplicável</HeadingSm>
                  <p>
                     Este site opera em conformidade com as leis brasileiras. Qualquer disputa decorrente do uso da plataforma será submetida ao
                     foro da comarca onde está sediada a empresa responsável pelo site.
                  </p>
               </section>
            </div>
         </Container>
      </div>
   );
};
export default page;
