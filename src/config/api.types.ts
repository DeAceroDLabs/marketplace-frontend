export const API = {
  categories: "categories",
  products: (categoryId: number) => `categories/${categoryId}/products`,
  search: "/search",
  location: (zipCode: string) => `locations/postalCode/${zipCode}`,
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

export type ZipCodeLocation = {
  countryName: string;
  location: Location;
};

export type Location = {
  cityId: string;
  city: string;
  stateId: string;
  state: string;
  neighborhood: Neighborhood[];
};

export type Neighborhood = {
  value: string;
  label: string;
};
