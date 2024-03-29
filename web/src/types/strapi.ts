export namespace Strapi {
  export type Attributes<Attr> = { attributes: Attr };
  export type Data<Data> = { data: Data };

  export type Image = Data<
    Attributes<{
      url: string;
      alternativeText?: string;
      mime: string;
    }>
  >;
}
