import type { Attribute, Schema } from '@strapi/strapi';

export interface LocalLocalDeAtendimento extends Schema.Component {
  collectionName: 'components_local_local_de_atendimentos';
  info: {
    displayName: 'local de atendimento';
    icon: 'pinMap';
  };
  attributes: {
    descricao: Attribute.RichText;
    fotos: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    horario: Attribute.RichText;
  };
}

export interface SiteCaracteristicas extends Schema.Component {
  collectionName: 'components_site_caracteristicas';
  info: {
    description: '';
    displayName: 'caracteristica';
    icon: 'emotionHappy';
  };
  attributes: {
    altura: Attribute.Decimal;
    cabelo: Attribute.String;
    fumante: Attribute.Boolean;
    gluteos: Attribute.String;
    idade: Attribute.Integer;
    lingerie: Attribute.String;
    nacionalidade: Attribute.String;
    olhos: Attribute.String;
    perfume: Attribute.String;
    peso: Attribute.Decimal;
    piercings: Attribute.Boolean;
    tatuagens: Attribute.String;
  };
}

export interface SitePersonalidade extends Schema.Component {
  collectionName: 'components_site_personalidades';
  info: {
    displayName: 'personalidade';
    icon: 'plane';
  };
  attributes: {
    nome: Attribute.String;
  };
}

export interface SitePreco extends Schema.Component {
  collectionName: 'components_site_precos';
  info: {
    displayName: 'preco';
    icon: 'shoppingCart';
  };
  attributes: {
    duracao: Attribute.String;
    preco: Attribute.Integer;
  };
}

export interface SiteServico extends Schema.Component {
  collectionName: 'components_site_servicos';
  info: {
    description: '';
    displayName: 'servico';
    icon: 'dashboard';
  };
  attributes: {
    icone: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    nome: Attribute.String;
    precos: Attribute.Component<'site.preco', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'local.local-de-atendimento': LocalLocalDeAtendimento;
      'site.caracteristicas': SiteCaracteristicas;
      'site.personalidade': SitePersonalidade;
      'site.preco': SitePreco;
      'site.servico': SiteServico;
    }
  }
}
