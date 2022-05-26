import { API, Category, Product } from "./api.types";
import axios from "axios";

const fetchData = (url: string) => {
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
  return fetchUrl();
};

const postRequest = async (url: string, body: any) => {
  const headers = {};
  const response = await axios.post(url, body, { headers });
  return response;
};

const fetchCategories = (): Promise<Category[]> => {
  return fetchData(API.categories);
};

const fetchProducts = (categoryId: number): Promise<Product[]> => {
  return fetchData(API.products(categoryId));
};

const searchProducts = (query: string): Promise<any> => {
  const body = {
    q: query,
  };
  return postRequest(API.search, body);
};

export { fetchCategories, fetchProducts, searchProducts };
