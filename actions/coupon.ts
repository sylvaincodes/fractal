import axios from "axios";
// const randomstring = require("randomstring");

export const createCoupon = async () => {
  // const data = {
  //   coupon: randomstring.generate(7),
  //   discount: 50,
  //   startDate: new Date(),
  //   endDate: new Date().setDate(new Date().getDate() + 1), // + 1 DAYS
  //   status: "available",
  // };

  try {
    const get = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/coupon"
    );
    return get.data.data;
    // const response = await axios.post(
    //   process.env.NEXT_PUBLIC_API_URL + "/api/admin/coupons",
    //   data
    // );
    // return response.data.data;
  } catch (error) {
    return error;
  }
};
