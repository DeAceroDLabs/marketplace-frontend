import { Category } from "./api.types";

const fetchData = (url: string) => {
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
  return fetchUrl();
};

const fetchCategories = (): Promise<Category[]> => {
  return fetchData("/categories");
};

export { fetchCategories };
