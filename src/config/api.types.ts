export const API = {
  categories: "categories",
  products: (categoryId: number) => `categories/${categoryId}/products`,
  search: "search",
};

export type Category = {
  IdCategoria: number;
  NomCategoria: string;
  UrlImagen: string;
};

export type Article = {
  ClaArticulo: string;
};

export type Product = {
  ClaProducto: number;
  NomProducto: string;
  NomCategoria: string;
  IdCategoria: number;
  Articulos: Article[];
  CategoriaUrlImagen: string;
};
