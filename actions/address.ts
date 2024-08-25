import axios from "axios";

export const getUserById = async (id: string | undefined) => {
  try {
    if (id) {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/api/shipping",
        {
          params: { user_id: id },
        }
      );
      return response.data.data;
    }
  } catch (error) {
    return error;
  }
};
