export interface StrapiImageFormat {
   ext: string;
   hash: string;
   height: number;
   mime: string;
   name: string;
   path: null | string;
   size: number;
   sizeInBytes: number;
   url: string;
   width: number;
}

export interface StrapiImage {
   id: number;
   documentId?: string;
   name: string;
   alternativeText: string | null;
   caption: string | null;
   width: number;
   height: number;
   formats?: {
      large?: StrapiImageFormat;
      medium?: StrapiImageFormat;
      small?: StrapiImageFormat;
      thumbnail?: StrapiImageFormat;
   };
   hash: string;
   ext: string;
   mime: string;
   size: number;
   url: string;
   previewUrl: string | null;
   provider: string;
   provider_metadata?: any;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
}
