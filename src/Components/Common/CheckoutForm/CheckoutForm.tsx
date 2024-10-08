import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

import {
  selectCurrentUser,
  setPremium,
} from "@/src/redux/features/auth/authSlice";
import {
  useProfileVerifiedPaymentMutation,
  useVerifiedProfileMutation,
} from "@/src/redux/features/user/userApi";
import { useAppDispatch } from "@/src/redux/features/hooks";

const CheckoutForm = ({ closeModal, totalLike }: any) => {
  const user = useSelector(selectCurrentUser);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [profileVerifiedPayment] = useProfileVerifiedPaymentMutation();
  const dispatch = useAppDispatch();
  const [verifiedProfile] = useVerifiedProfileMutation();

  useEffect(() => {
    if (totalLike >= 1) {
      const fetchClientSecret = async () => {
        try {
          const res = await profileVerifiedPayment({ price: 100 }).unwrap();
          setClientSecret(res?.data?.clientSecret);
        } catch (err) {
          console.log(err);
          toast.error("Failed to initialize payment");
        }
      };
      fetchClientSecret();
    }
  }, [profileVerifiedPayment, totalLike]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    const { error }: any = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error("Payment Method Error");
    }
    // Confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.name || "anonymous",
          },
        },
      });
    if (confirmError) {
      toast.error("Payment Confirmation Error");
    } else {
      if (paymentIntent.status === "succeeded") {
        const data = { email: user?.email };
        try {
          const res = await verifiedProfile(data).unwrap();
          if (res.success) {
            toast.success(`Successfully Your Profile Verified`);
            closeModal();
            dispatch(setPremium(true));
          }
        } catch (err) {
          console.error("Verified error", err);
          toast.error("Something went wrong");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-lg max-w-2xl mx-auto py-16 bg-white px-5">
        <div>
          <div className="flex justify-between items-center gap-3">
            <div className="pb-6 w-full">
              <p className="pb-2 font-semibold text-gray-800">Name</p>
              <input
                className="w-full px-4 py-2.5 text-base text-gray-400 rounded-lg font-normal border border-gray-200"
                type="text"
                defaultValue={user?.name}
                disabled
              />
            </div>
            <div className="pb-6 w-full">
              <p className="text-gray-800 pb-2 font-semibold">Email address</p>
              <input
                className="w-full px-4 py-2.5 text-base text-gray-400 rounded-lg font-normal border border-gray-200"
                type="email"
                defaultValue={user?.email}
                disabled
              />
            </div>
          </div>
          <div className="pb-6">
            <p className="pb-2 font-semibold text-gray-800">Card Number</p>
            <div className="px-4 py-3 border bg-white rounded-lg">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between  pb-4 mb-4">
            <p className="text-gray-800 font-semibold">
              Total:
              <span className="font-semibold text-lg text-blue-500"> $100</span>
            </p>

            <button
              className="bg-blue-400 hover:bg-blue-500 duration-200  px-10 py-2 rounded text-white"
              type="submit"
              disabled={!stripe || !clientSecret}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
