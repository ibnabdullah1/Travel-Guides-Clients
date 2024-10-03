import { ImSpinner8 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="h-screen bg-white fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      <ImSpinner8 className="animate-spin text-3xl text-primary" />
    </div>
  );
}
