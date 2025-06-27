import type { Schema, Struct } from '@strapi/strapi';

export interface LocalLocalDeAtendimento extends Struct.ComponentSchema {
  collectionName: 'components_local_local_de_atendimentos';
  info: {
    displayName: 'local de atendimento';
    icon: 'pinMap';
  };
  attributes: {
    descricao: Schema.Attribute.RichText;
    fotos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    horario: Schema.Attribute.RichText;
  };
}

export interface SiteCaracteristicas extends Struct.ComponentSchema {
  collectionName: 'components_site_caracteristicas';
  info: {
    description: '';
    displayName: 'caracteristica';
    icon: 'emotionHappy';
  };
  attributes: {
    altura: Schema.Attribute.Decimal;
    cabelo: Schema.Attribute.String;
    fumante: Schema.Attribute.Boolean;
    gluteos: Schema.Attribute.String;
    idade: Schema.Attribute.Integer;
    lingerie: Schema.Attribute.String;
    nacionalidade: Schema.Attribute.String;
    olhos: Schema.Attribute.String;
    perfume: Schema.Attribute.String;
    peso: Schema.Attribute.Decimal;
    piercings: Schema.Attribute.Boolean;
    tatuagens: Schema.Attribute.String;
  };
}

export interface SitePersonalidade extends Struct.ComponentSchema {
  collectionName: 'components_site_personalidades';
  info: {
    displayName: 'personalidade';
    icon: 'plane';
  };
  attributes: {
    nome: Schema.Attribute.String;
  };
}

export interface SitePreco extends Struct.ComponentSchema {
  collectionName: 'components_site_precos';
  info: {
    displayName: 'preco';
    icon: 'shoppingCart';
  };
  attributes: {
    duracao: Schema.Attribute.String;
    preco: Schema.Attribute.Integer;
  };
}

export interface SiteServico extends Struct.ComponentSchema {
  collectionName: 'components_site_servicos';
  info: {
    description: '';
    displayName: 'servico';
    icon: 'dashboard';
  };
  attributes: {
    descricao: Schema.Attribute.String;
    icone: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    nome: Schema.Attribute.String;
    precos: Schema.Attribute.Component<'site.preco', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'local.local-de-atendimento': LocalLocalDeAtendimento;
      'site.caracteristicas': SiteCaracteristicas;
      'site.personalidade': SitePersonalidade;
      'site.preco': SitePreco;
      'site.servico': SiteServico;
    }
  }
}
