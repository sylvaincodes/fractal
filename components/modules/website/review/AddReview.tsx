import Toast from "@/components/custom/Toast";
import { Product, Review } from "@/types";
import { Rating } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LogInIcon, SendIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddReview({
  product,
  reviews,
  setReviews,
}: {
  product: Product;
  reviews: Review[];
  setReviews: (value: Review[]) => void;
}) {
  const { user, isSignedIn } = useUser();
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = Yup.object({
    review: Yup.string()
      .required("required")
      .min(10, "At least 10 string.")
      .max(250, "250 string max."),
    rating: Yup.mixed(),
  });

  const initialValues = {
    review: "",
    rating: "",
  };

  const router = useRouter();

  const handleSave = async (values: { review: string }) => {
    setLoading(true);
    if (!isSignedIn) {
      toast.custom(
        <Toast
          message="You need to login. Redirecting... Login page !"
          status="error"
        />
      );
      router.push("/sign-in");
      return;
    }
    const data = {
      productId: product._id,
      review: values.review,
      rating: rating,
      reviewBy: {
        id: user.id,
        fullName: user.fullName,
        imageUrl: user.imageUrl,
      },
      images: [],
      likes: [],
      createdAt: JSON.parse(JSON.stringify(new Date())),
    };

    if (!rating) {
      toast.custom(
        <Toast message="Please give your rating ⭐⭐⭐ !" status="error" />
      );
      setLoading(false);
      return;
    }

    //TODO:check error
    //@ts-expect-error:  need to check later
    setReviews([...reviews, data]);

    setLoading(true);
    await axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/review", data)
      .then((response) => {
        const data = response.data;
        toast.custom(<Toast message={data.message} status="success" />);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return;
  };

  return (
    <div className="flex flex-col gap-4">
      <h5>Add your Review</h5>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={async (values) => {
          handleSave(values);
        }}
      >
        {({
          errors,
          /* and other goodies */
        }) => (
          <Form encType="multipart/form-data">
            <div className="flex flex-col gap-4">
              <Field
                name="review"
                placeholder="Put your review here"
                className={cn(
                  "w-full h-20 border border-black p-4 text-black focus:outline-none outline-none",
                  errors.review && "border border-red-300"
                )}
              />
              <ErrorMessage
                name="review"
                component="div"
                className="py-2 font-bold text-red-900"
              />
            </div>
            <div className="flex flex-col gap-10 mt-10">
              <Rating
                onChange={(e) => {
                  const target = e.target;
                  //TODO: Check error
                  //@ts-expect-error:  need to check later
                  setRating(target.value);
                }}
                name="rating"
                precision={1}
                className="text-2xl"
                style={{ fontSize: "32px" }}
              />
            </div>
            <div className="flex justify-start mt-10">
              {isSignedIn ? (
                <Button
                  variant="default"
                  size="lg"
                  disabled={loading}
                  type="submit"
                  className="px-4 w-fit"
                >
                  Post your review
                  <SendIcon className="text-white ms-4" />
                </Button>
              ) : (
                <Link
                  href="/sign-in"
                  className="bg-primary-700 flex items-center justify-center gap-4 uppercase text-white p-6"
                >
                  Login to post your comment
                  <LogInIcon />
                </Link>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
