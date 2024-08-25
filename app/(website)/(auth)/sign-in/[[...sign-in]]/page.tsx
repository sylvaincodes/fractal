import { SignIn } from "@clerk/nextjs";
import { url } from "inspector";
import { Metadata } from "next";

export default function Page() {
  return (
    <div className="h-full grid grid-cols-2 ">
      <div className="flex bg-cover bg-center bg-[url('https://res.cloudinary.com/dlm0ieiyt/image/upload/v1724509216/ecommerce-carrefour/login_onnsp6.png')]"></div>
      <div className="flex justify-center items-center">
        <SignIn />;
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Fractal - Login page",
  description:
    "A Ecommerce app. We are selling clothing, shoes for mens womens and kids",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};
