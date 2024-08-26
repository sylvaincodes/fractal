import { Review } from "@/types";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import React from "react";
import { getDate } from "@/lib/utils";

export default function ReviewItem({ item }: { item: Review }) {
  // TODO:New feature

  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  // const { user } = useUser();

  // const [likes, setLikes] = useState(item.likes.length);

  // const [likeDisable, setLikeDisable] = useState<boolean>(
  //   item.likes.find((i: string) => i === userId) ? true : false
  // );
  // const [error, setError] = useState();
  // const [loading, startTransition] = useTransition();

  // const handleLike = async () => {
  //   if (likeDisable) {
  //     setLikes(likes - 1);
  //   } else {
  //     setLikes(likes + 1);
  //   }
  //   const data = {
  //     reviewId: item._id,
  //     likeBy: item.reviewBy._id,
  //     remove: likeDisable,
  //   };

  //
  //     await axios
  //       .put(process.env.NEXT_PUBLIC_SERVER_URL + "/api/review", data)
  //       .then((response) => {
  //         const data = response.data;
  //         toast.custom(<Toast message={data.message} status="success" />);

  //         if (data) {
  //           setLikeDisable(!likeDisable);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  // };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image
          width="40"
          height="40"
          className="mr-2 w-auto h-auto rounded-full"
          src={item?.reviewBy?.imageUrl}
          alt="image"
        />
        <div className="flex flex-col gap-1 items-center [&span]:text-2xl">
          <h6>{item.reviewBy?.fullName}</h6>
          <Rating
            size="small"
            name="size-small"
            readOnly
            value={item.rating}
            precision={0.5}
            style={{ color: "orange", fontSize: "10px" }}
          />
        </div>
      </div>
      <p>{item.review}</p>
      <div className="flex items-center gap-4">
        <em className="text-gray-400">Review by </em> <strong>Fractal</strong>
        Posted on <em className="text-gray-400">{getDate(item.createdAt)}</em>
      </div>
    </div>
  );
}
