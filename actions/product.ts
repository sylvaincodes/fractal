import axios from "axios";

export const getProductBySlug = async (slug: string) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/products",
      {
        params: { slug: slug },
      }
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/products"
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const getProductBasics = async (id: string) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/products",
      {
        params: { id: id },
      }
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};
