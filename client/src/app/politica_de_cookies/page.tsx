import Container from "@/components/layout/Container";
import { HeadingSm, HeadingXl } from "@/components/shared/Typography";

const PoliticaDeCookies = () => {
   return (
      <div className="bg-linear-to-b from-black to-gray-800 pt-10 pb-20">
         <Container>
            <HeadingXl>Política de Cookies</HeadingXl>
            <div className="space-y-4 mt-4">
               <section>
                  <HeadingSm>I. O que são Cookies?</HeadingSm>
                  <p>
                     Cookies são pequenos arquivos de texto que são armazenados no dispositivo do usuário (computador, tablet, smartphone) quando
                     este visita um site. Esses arquivos ajudam o site a reconhecer o dispositivo do usuário em futuras visitas, melhorar a
                     experiência de navegação, e oferecer funcionalidades personalizadas.
                  </p>
               </section>
               <section>
                  <HeadingSm>II. Como a Hot Massages Utiliza Cookies</HeadingSm>
                  <p>
                     A Hot Massages utiliza cookies para melhorar a experiência dos visitantes em nosso site. Os cookies permitem que o site
                     funcione de maneira eficiente, lembre-se de suas preferências, e forneça informações relevantes. Abaixo estão os tipos de
                     cookies que utilizamos:
                  </p>
                  <ul className="list-decimal ps-4">
                     <li>
                        <strong>Cookies Essenciais:</strong> Necessários para que o site funcione corretamente. Permitem funcionalidades básicas,
                        como segurança, verificação de identidade e gerenciamento de rede. Sem esses cookies, o site pode não funcionar
                        corretamente.
                     </li>
                     <li>
                        <strong>Cookies de Desempenho e Análise:</strong> Coletam informações sobre como os visitantes usam o site, como as
                        páginas mais visitadas e mensagens de erro. Essas informações são usadas para melhorar o funcionamento do site e entender
                        o comportamento dos usuários.
                     </li>
                     <li>
                        <strong>Cookies de Funcionalidade:</strong> Permitem que o site lembre-se das escolhas do usuário (nome de usuário,
                        idioma, região) e forneça funcionalidades mais personalizadas.
                     </li>
                     <li>
                        <strong>Cookies de Publicidade:</strong> Utilizados para fornecer anúncios mais relevantes para o usuário e seus
                        interesses, limitar o número de vezes que um anúncio é exibido e medir a eficácia das campanhas publicitárias. Geralmente
                        são colocados por redes de publicidade com permissão do operador do site.
                     </li>
                  </ul>
               </section>
               <section>
                  <HeadingSm>III. Gerenciamento de Cookies</HeadingSm>
                  <p>
                     Ao acessar o site “Hot Massages”, os usuários serão apresentados a um banner de cookies que permite escolher se aceitam ou
                     rejeitam a utilização de cookies não essenciais. A aceitação desses cookies nos ajuda a oferecer uma experiência de
                     navegação personalizada. Os usuários podem a qualquer momento alterar suas preferências de cookies, clicando no link de
                     configurações de cookies no rodapé do site.
                  </p>
                  <p>
                     Além disso, a maioria dos navegadores permite que os usuários gerenciem as configurações de cookies, incluindo recusa de
                     novos cookies, exclusão de cookies existentes ou configuração do navegador para notificá-lo quando novos cookies forem
                     armazenados. Instruções para gerenciar cookies em navegadores populares:
                  </p>
                  <ul className="list-disc ps-4">
                     <li>Google Chrome</li>
                     <li>Mozilla Firefox</li>
                     <li>Internet Explorer</li>
                     <li>Safari</li>
                  </ul>
               </section>
               <section>
                  <HeadingSm>IV. Cookies de Terceiros</HeadingSm>
                  <p>
                     O site “Hot Massages” pode utilizar cookies de terceiros para serviços de análise e publicidade, como Google Analytics, para
                     nos ajudar a entender como os visitantes interagem com o site. Esses cookies coletam informações de maneira anônima e são
                     utilizados para criar relatórios sobre a atividade do site e o desempenho das campanhas publicitárias.
                  </p>
               </section>
               <section>
                  <HeadingSm>V. Atualizações da Política de Cookies</HeadingSm>
                  <p>
                     Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas de cookies ou por
                     motivos legais, regulamentares ou operacionais. Recomendamos que os usuários revisem esta política regularmente para se
                     manterem informados sobre o uso de cookies e tecnologias relacionadas.
                  </p>
               </section>
               <section>
                  <HeadingSm>VI. Contato</HeadingSm>
                  <p>
                     Se você tiver dúvidas ou preocupações sobre o uso de cookies no site “Hot Massages”, entre em contato conosco através do
                     e-mail <a href="mailto:contacto@hotmassages.pt">contacto@hotmassages.pt</a>. Estamos aqui para ajudar!
                  </p>
               </section>
            </div>
         </Container>
      </div>
   );
};
export default PoliticaDeCookies;