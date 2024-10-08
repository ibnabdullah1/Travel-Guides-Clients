import { VITE_Payment_Gateway_PK } from "@/src/data/dummyData";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Fragment } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
// const stripePublicKey = process.env.VITE_Payment_Gateway_PK;

const stripePromise = loadStripe(VITE_Payment_Gateway_PK);

const PaymentModal = ({ isOpen, closeModal, totalLike }: any) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-2xl p-6 bg-blue-500 text-center font-semibold text-white"
                >
                  Payment Info
                </DialogTitle>
                <Elements stripe={stripePromise}>
                  <CheckoutForm closeModal={closeModal} totalLike={totalLike} />
                </Elements>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PaymentModal;
