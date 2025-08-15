# HotMassagens — Portal de massagistas

Projeto: site para encontrar as melhores massagistas, terapeutas e SPAs do distrito de Lisboa. Feito para uso comercial com painel de gestão (Strapi) para que o cliente controle conteúdos, imagens e perfis.

## Visão geral
- Plataforma Next.js (frontend) + Strapi CMS (backend) para gestão de conteúdo.
- Objetivo: descoberta e filtragem avançada de profissionais e espaços de bem‑estar em Lisboa.
- Foco em experiência, performance, acessibilidade e Clean Code.

## Tecnologias principais
- Next.js (frontend)
- Strapi CMS (headless)
- TypeScript
- Tailwind CSS
- react-hook-form + zod (forms & validação)
- yet-another-react-lightbox (galeria/lightbox)
- resend (envio de e-mails)
- Context API (estado global)

## Funcionalidades principais
- Listagem de profissionais e SPAs com perfil detalhado (fotos, serviços, avaliações, disponibilidade).
- Painel Strapi para o cliente gerir perfis, serviços, galerias e conteúdos estáticos.
- Filtragem avançada e combinável (destacar):
    - Localização (bairro / distrito)
    - Idade
    - Cor dos olhos
    - Altura
    - Peso
    - Cor do cabelo
    - Nacionalidade
    - Usa piercings (boolean)
    - Tem tatuagens (boolean)
    - É fumante (boolean)

Descrição da filtragem: Filtros aplicáveis em conjunto, com busca por palavra-chave, ordenação e paginação. Implementado de forma a permitir queries eficientes ao Strapi (prefira server‑side / API filtering) e fallback client‑side para refinamentos rápidos. Inputs validados com react-hook-form + zod.

## Padrões de implementação
- Clean Code: componentes pequenos, nomes explícitos, separation of concerns, hooks reutilizáveis.
- Context API para estado global (filtros, usuário, carrinho/reservas).
- Tipagem com TypeScript e DTOs/parsers com zod.
- Formulários com react-hook-form + integração com zod para validação e mensagens de erro.
- Galeria com yet-another-react-lightbox para experiência de visualização.
- Envio de e-mails com Resend (ex.: confirmações de contacto/reserva). Variáveis sensíveis em env.

## Segurança e privacidade
- Não expor tokens em client-side.
- Validar e sanitizar uploads no Strapi.
- Políticas de privacidade (tratamento de dados pessoais / GDPR) — importante para profissionais e clientes.

---
