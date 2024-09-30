import axios from "axios";

export const getOrder = async (id: string) => {
  try {
    if (id) {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/api/order",
        {
          params: { id: id },
        }
      );
      return response.data.data;
    }
  } catch (error) {
    return error;
  }
};

export const getOrders = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/admin/orders"
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const getOrderByUserId = async (user: string | undefined) => {
  try {
    if (user) {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/api/order",
        {
          params: { user: user },
        }
      );
      return response.data.data;
    }

    return;
  } catch (error) {
    return error;
  }
};
