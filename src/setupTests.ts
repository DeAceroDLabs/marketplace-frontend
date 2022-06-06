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
    {
      ClaProducto: 1,
      NomProducto: `category ${categoryId} product 2`,
      NomCategoria: "mock category 1",
      IdCategoria: categoryId,
      Articulos: [
        {
          ClaArticulo: "mock article 2",
        },
      ],
      CategoriaUrlImagen: "https://picsum.photos/200/300",
    },
    {
      ClaProducto: 2,
      NomProducto: `category ${categoryId} product 3`,
      NomCategoria: "mock category 1",
      IdCategoria: categoryId,
      Articulos: [
        {
          ClaArticulo: "mock article 3",
        },
      ],
      CategoriaUrlImagen: "https://picsum.photos/200/300",
    },
    {
      ClaProducto: 3,
      NomProducto: `category ${categoryId} product 4`,
      NomCategoria: "mock category 1",
      IdCategoria: categoryId,
      Articulos: [
        {
          ClaArticulo: "mock article 4",
        },
      ],
      CategoriaUrlImagen: "https://picsum.photos/200/300",
    },
    {
      ClaProducto: 4,
      NomProducto: `category ${categoryId} product 5`,
      NomCategoria: "mock category 1",
      IdCategoria: categoryId,
      Articulos: [
        {
          ClaArticulo: "mock article 5",
        },
      ],
      CategoriaUrlImagen: "https://picsum.photos/200/300",
    },
    {
      ClaProducto: 5,
      NomProducto: `category ${categoryId} product 6`,
      NomCategoria: "mock category 1",
      IdCategoria: categoryId,
      Articulos: [
        {
          ClaArticulo: "mock article 6",
        },
      ],
      CategoriaUrlImagen: "https://picsum.photos/200/300",
    },
    {
      ClaProducto: 6,
      NomProducto: `category ${categoryId} product 7`,
      NomCategoria: "mock category 1",
      IdCategoria: categoryId,
      Articulos: [
        {
          ClaArticulo: "mock article 7",
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
