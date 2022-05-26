import { API, Category, Product } from "./config/api.types";
import "@testing-library/jest-dom";

const getProductsByCategory = (categoryId: number) => {
  return [
    {
      ClaProducto: 0,
      NomProducto: `category ${categoryId} product 1`,
      NomCategoria: "mock category 1",
      IdCategoria: categoryId,
      Articulos: [
        {
          ClaArticulo: "mock article 1",
        },
      ],
      CategoriaUrlImagen: "https://picsum.photos/200/300",
    },
  ];
};

const categoriesResponse: Category[] = [
  {
    IdCategoria: 1,
    UrlImagen: "https://picsum.photos/200/300",
    NomCategoria: "mock category 1",
  },
  {
    IdCategoria: 2,
    UrlImagen: "https://picsum.photos/200/300",
    NomCategoria: "mock category 2",
  },
];

export const productsResponse: Product[] = getProductsByCategory(1);
const productsResponse2: Product[] = getProductsByCategory(2);

export default async function mockFetch(url: RequestInfo): Promise<Response> {
  switch (url) {
    case API.categories: {
      return {
        ok: true,
        status: 200,
        json: async () => categoriesResponse,
      } as Response;
    }
    case API.products(1): {
      return {
        ok: true,
        status: 200,
        json: async () => productsResponse,
      } as Response;
    }
    case API.products(2): {
      return {
        ok: true,
        status: 200,
        json: async () => productsResponse2,
      } as Response;
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}
