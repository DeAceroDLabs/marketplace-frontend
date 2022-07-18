import { API, Category, Product, ZipCodeLocation } from "./config/api.types";
import "@testing-library/jest-dom";

const getProductsByCategory = (categoryId: number): Product[] => {
  return [
    {
      productId: 0,
      productName: `category ${categoryId} product 1`,
      categoryName: "mock category 1",
      categoryId: categoryId,
      articles: [
        {
          articleId: "mock article 1",
        },
      ],
      categoryImageUrl: "https://picsum.photos/200/300",
    },
    {
      productId: 1,
      productName: `category ${categoryId} product 2`,
      categoryName: "mock category 1",
      categoryId: categoryId,
      articles: [
        {
          articleId: "mock article 2",
        },
      ],
      categoryImageUrl: "https://picsum.photos/200/300",
    },
    {
      productId: 2,
      productName: `category ${categoryId} product 3`,
      categoryName: "mock category 1",
      categoryId: categoryId,
      articles: [
        {
          articleId: "mock article 3",
        },
      ],
      categoryImageUrl: "https://picsum.photos/200/300",
    },
    {
      productId: 3,
      productName: `category ${categoryId} product 4`,
      categoryName: "mock category 1",
      categoryId: categoryId,
      articles: [
        {
          articleId: "mock article 4",
        },
      ],
      categoryImageUrl: "https://picsum.photos/200/300",
    },
    {
      productId: 4,
      productName: `category ${categoryId} product 5`,
      categoryName: "mock category 1",
      categoryId: categoryId,
      articles: [
        {
          articleId: "mock article 5",
        },
      ],
      categoryImageUrl: "https://picsum.photos/200/300",
    },
    {
      productId: 5,
      productName: `category ${categoryId} product 6`,
      categoryName: "mock category 1",
      categoryId: categoryId,
      articles: [
        {
          articleId: "mock article 6",
        },
      ],
      categoryImageUrl: "https://picsum.photos/200/300",
    },
    {
      productId: 6,
      productName: `category ${categoryId} product 7`,
      categoryName: "mock category 1",
      categoryId: categoryId,
      articles: [
        {
          articleId: "mock article 7",
        },
      ],
      categoryImageUrl: "https://picsum.photos/200/300",
    },
  ];
};

const categoriesResponse: Category[] = [
  {
    categoryId: 1,
    imageUrl: "https://picsum.photos/200/300",
    categoryName: "mock category 1",
  },
  {
    categoryId: 2,
    imageUrl: "https://picsum.photos/200/300",
    categoryName: "mock category 2",
  },
];

export const productsResponse: Product[] = getProductsByCategory(1);
const productsResponse2: Product[] = getProductsByCategory(2);
const locationResponse: ZipCodeLocation = {
  countryName: "mock Country",
  location: {
    cityId: "mock city",
    city: "mock city",
    stateId: "mock stateId",
    state: "mock state",
    neighborhood: [],
  },
};

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
    case API.location("12345"): {
      return {
        ok: true,
        status: 200,
        json: async () => locationResponse,
      } as Response;
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}
