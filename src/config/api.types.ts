export const API = {
  categories: "categories",
  products: (categoryId: number) => `categories/${categoryId}/products`,
  search: "/search",
};

export type Category = {
  categoryId: number;
  categoryName: string;
  imageUrl: string;
};

export type Article = {
  articleId: string;
};

export type Product = {
  productId: number;
  productName: string;
  categoryName: string;
  categoryId: number;
  articles: Article[];
  categoryImageUrl: string;
};
