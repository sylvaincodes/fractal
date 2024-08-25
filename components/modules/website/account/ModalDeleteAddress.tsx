import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Address } from "@/types";
import axios from "axios";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import * as React from "react";
import { useUser } from "@clerk/nextjs";
import Toast from "@/components/custom/Toast";
import Loading from "@/components/custom/Loading";

export default function ModalDeleteAddress({ item }: { item: Address }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  const deleteAddress = async () => {
    if (loading) {
      return;
    }

    const data = {
      user_id: user?.id,
      newAddress: item,
    };

    setLoading(true);
    await axios
      .delete(process.env.NEXT_PUBLIC_API_URL + "/api/account/address", {
        data,
      })
      .then((response) => {
        const data = response.data;
        toast.custom(<Toast message={data.message} status="success" />);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.refresh();
        setLoading(false);
      });
  };

  return (
    <AlertDialog>
      {loading && <Loading isLoading={loading} />}
      <AlertDialogTrigger asChild>
        <Trash2Icon className="text-red-600 " />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-h5">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your item
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteAddress}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
