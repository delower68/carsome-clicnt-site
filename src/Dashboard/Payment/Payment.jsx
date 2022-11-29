import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import "./Payment";

const stripePromise = loadStripe(
  "pk_test_51M66tyHSZ9CdJ3UVpy4OB5bxtnSQAy7DHxK8VTVSYzAglfp5g4bNCRddZNE6byEEkWI5v6ZrsSY6nXxgggc2KK9w00hOJtyHyj"
);

const Payment = () => {
  const booking = useLoaderData();

  return (
    <div className="w-96 mt-7">
      <Elements stripe={stripePromise}>
        <CheckoutForm booking={booking} />
      </Elements>
    </div>
  );
};

export default Payment;
