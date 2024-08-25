"use client";
import React, { useEffect, useState } from "react";
import OrderHeader from "@/components/modules/website/order/OrderHeader";
import OrderProducts from "@/components/modules/website/order/OrderProducts";
import OrderSummary from "@/components/modules/website/order/OrderSummary";
import ShippingBillingAddress from "@/components/modules/website/order/ShippingBillingAddress";
import { Order } from "@/types";
import axios from "axios";
import Container from "@/components/custom/Container";
import Loading from "@/components/custom/Loading";

export default function OrderWrapper({ id }: { id: string }) {
  const [order, setOrder] = useState<Order>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getOrder = async () => {
      setLoading(true);
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/order", {
          params: { id: id },
        })
        .then((response) => {
          setOrder(response.data.data);
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getOrder();
  }, [id]);

  return (
    <section className="relative pb-10">
      {loading && <Loading isLoading={loading} />}

      <Container>
        <div className="">
          <h2 className="">Your order details</h2>

          <div className="flex gap-8 flex-wrap lg:flex-nowrap my-12">
            <div className="flex-1">
              <OrderHeader order={order} />
              <OrderProducts order={order} />
              <OrderSummary
                order={order}
                loading={loading}
                setLoading={setLoading}
              />
            </div>
            <ShippingBillingAddress
              order={order}
              loading={loading}
              setLoading={setLoading}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
