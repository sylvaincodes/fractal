import axios from "axios";
import { auth } from "@clerk/nextjs/server";

const { getToken } = auth();
export const getOrder = async (id: string) => {
  try {
    const token = await getToken();
    if (id) {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/api/order",
        {
          params: { id: id },
          headers: { Authorization: `Bearer ${token}` },
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
    const token = await getToken();
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/admin/orders",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const getOrderByUserId = async (user: string | undefined) => {
  try {
    const token = await getToken();
    if (user) {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/api/order",
        {
          params: { user: user },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data.data;
    }

    return;
  } catch (error) {
    return error;
  }
};
