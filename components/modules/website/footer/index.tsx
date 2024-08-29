"use client";
import Container from "@/components/custom/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Loader2Icon,
  Mail,
  MapPin,
  MoveRight,
  PhoneCall,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { m } from "framer-motion";
import { z } from "zod";
import toast from "react-hot-toast";
import Toast from "@/components/custom/Toast";
import axios from "axios";
import Loading from "@/components/custom/Loading";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

export default function Footer() {
  const { isSignedIn } = useUser();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);

    const Email = z.object({
      email: z.string().email().min(5).max(100),
    });

    const validatedFields = Email.safeParse({
      email: email,
    });

    if (!validatedFields.success) {
      toast.custom(
        <Toast message="Email is invalid. Try again" status="error" />
      );
      setLoading(false);
      return;
    }

    const sendEmail = async () => {
      const values = {
        subject: "Subscribe to newsletter",
        email: email,
        message: "I just subscribed to your newsletter",
      };

      await axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/api/sendemail", values)
        .then((response) => {
          const data = response.data;
          toast.custom(<Toast status="success" message={data.message} />);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    await sendEmail();
  };

  return (
    <>
      {loading && <Loading isLoading={true} />}
      <m.footer
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-black py-10"
      >
        <Container>
          <div className="flex-col gap-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 text-slate-400 text-xl">
              <ul className="flex flex-col gap-4">
                <li className="my-10">
                  <h1 className="text-3xl font-bold text-white tracking-wider">
                    Fractal
                  </h1>
                </li>
                <li className="flex gap-4">
                  <PhoneCall /> (704) 555-0127
                </li>
                <li className="flex gap-4">
                  <Mail /> Fractal@fractal.store
                </li>
                <li className="flex gap-4">
                  <MapPin /> 3891 Ranchview Dr. Richardson, California 62639
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className="my-10">
                  <h1 className="text-2xl font-bold text-white tracking-wider">
                    Informations
                  </h1>
                </li>
                <li className="flex gap-4">
                  <Link
                    className="flex gap-4 hover:text-primary-500"
                    href="/account/dashboard"
                  >
                    My account
                  </Link>
                </li>
                <li className="flex gap-4">
                  <Link
                    className="flex gap-4 hover:text-primary-500"
                    href={isSignedIn ? "/account/dashboard" : "/sign-in"}
                  >
                    {isSignedIn ? "Dashboard" : "Login"}
                  </Link>
                </li>
                <li className="flex gap-4 hover:text-primary-500">
                  <Link className="flex gap-4" href="/cart">
                    My cart
                  </Link>
                </li>
                <li className="flex gap-4 hover:text-primary-500">
                  <Link className="flex gap-4" href="/checkout">
                    Checkout
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className="my-10">
                  <h1 className="text-2xl font-bold text-white tracking-wider">
                    Services
                  </h1>
                </li>
                <li className="flex gap-4">
                  <Link href="#" className="flex gap-4 hover:text-primary-500">
                    About Us
                  </Link>
                </li>
                <li className="flex gap-4">
                  <Link href="#" className="flex gap-4 hover:text-primary-500">
                    Careers
                  </Link>
                </li>
                <li className="flex gap-4">
                  <Link href="#" className="flex gap-4 hover:text-primary-500">
                    Delivery Information
                  </Link>
                </li>
                <li className="flex gap-4">
                  <Link href="#" className="flex gap-4 hover:text-primary-500">
                    Privacy Policy
                  </Link>
                </li>
              </ul>

              <ul className="flex flex-col gap-4">
                <li className="my-10">
                  <h1 className="text-2xl font-bold text-white tracking-wider">
                    Subscribe
                  </h1>
                </li>
                <li className="flex gap-4">
                  <h6>
                    Enter your email to get apps, product and latest updates.
                  </h6>
                </li>
                <li className="flex gap-4">
                  <form className="flex w-full bg-transparent border border-white rounded-xl gap-4 items-center p-3">
                    <Mail size="40" />
                    <Input
                      data-cy="emailNewsletter"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      className="rounded-xl  py-4 bg-transparent text-white text-xl"
                      placeholder="Enter your email here"
                      max="40"
                    />

                    <Button
                      data-cy="buttonNewsletter"
                      onClick={(e) => handleSave(e)}
                      disabled={loading}
                      type="submit"
                      variant="outline"
                      size="icon"
                    >
                      <MoveRight className={cn("block", loading && "hidden")} />
                      <Loader2Icon
                        className={cn(
                          "hidden",
                          loading && "block animate-spin"
                        )}
                      />
                    </Button>
                  </form>
                </li>
              </ul>
            </div>

            <Separator className="my-10" />

            <div className="flex my-10 flex-wrap lg:flex-nowrap gap-8 justify-between">
              <div className="inline-flex gap-4">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/10101/10101223.png"
                  width="70"
                  height="70"
                  alt="visa"
                />
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/13583/13583661.png"
                  width="70"
                  height="70"
                  alt="visa"
                />
              </div>
              <div className="inline-flex gap-4  items-center text-slate-300 text-sm">
                @2024 Fractal All rights reserved
              </div>
              <div className="inline-flex gap-4">
                <Button
                  className="hover:bg-primary-500 hover:text-white"
                  variant="outline"
                  size="icon"
                >
                  <Facebook />
                </Button>
                <Button
                  className="hover:bg-primary-500 hover:text-white"
                  variant="outline"
                  size="icon"
                >
                  <Instagram />
                </Button>
                <Button
                  className="hover:bg-primary-500 hover:text-white"
                  variant="outline"
                  size="icon"
                >
                  <Twitter />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </m.footer>
    </>
  );
}
