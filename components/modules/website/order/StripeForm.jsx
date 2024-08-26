"use client"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { Lock } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import Toast from "@/components/custom/Toast";
import { Button } from "@/components/ui/button";
// import { Order } from "@/types";
// import { PaymentMethod, StripeError } from "@stripe/stripe-js";
import PropTypes from 'prop-types';

export default function StripeForm({ order,setLoading, loading }) {

  const stripe = useStripe();
  const elements = useElements();
  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#000",
        color: "#000",
        fontSize: "30px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#000" },
        "::placeholder": { color: "#000" },
      },

      invalid: {
        iconColor: "#0068e1",
        color: "#0068e1",
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }


    const { error, paymentMethod } =
    await stripe.createPaymentMethod({
      type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          // Include any additional collected billing details.
          name: order.user.name,
          email: order.user.email,
        },
      });
    

      if(error &&  error.code !== ""){
        toast.custom(<Toast  message={error.type + ": " +error.code} status="error"/>);
        setLoading(false);
        return;
      }

    if (!error && paymentMethod) {
      try {
        const { id } = paymentMethod;
        const data = {
          amount: order.total,
          order_id: order._id,
          payment_method_id: id,
        };
        
        await axios
          .post( process.env.NEXT_PUBLIC_API_URL + `/api/order/stripe`, data)
          .then((response) => {
            const data = response.data;
            toast.custom(<Toast  message={data.message} status="success"/>);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            window.location.reload()
          });

      } catch (error) {
        console.log(error)
      }
    }
  };

  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
      <CardElement options={CARD_OPTIONS}/>
      <Button
      variant="primary"  size="lg"
      disabled={loading || !stripe}
        type="submit"
        className="py-4 gap-8"
      >
        <Lock />
        <span className="text-2xl">Pay Order</span>
      </Button>
    </form>
  );
}


StripeForm.propTypes = {
  setLoading: PropTypes.func,
  order: PropTypes.object,
  loading: PropTypes.boolean,
};