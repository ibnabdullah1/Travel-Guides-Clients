"use client";
import { useChangePasswordMutation } from "@/src/redux/features/auth/authApi";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";

const Login = () => {
  const [oldShowPassword, setOldShowPassword] = useState(false);
  const [newShowPassword, setNewShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [changePassword] = useChangePasswordMutation();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setPasswordError("");

    const form = e.currentTarget;
    const userInfo = {
      oldPassword: form.old_password.value,
      newPassword: form.new_password.value,
    };

    try {
      const res = await changePassword(userInfo).unwrap();
      setLoading(true);
      if (res.success) {
        toast.success("Password updated successfully");
        setLoading(false);
        setPasswordError("");
        setIsSuccess(true);
      }
    } catch (err: any) {
      setPasswordError(err?.data?.message);
      setLoading(false);
    }
  };

  return (
    <>
      {!isSuccess ? (
        <div className="flex justify-center items-center py-20">
          <div
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.06)",
            }}
            className="flex flex-col md:min-w-[400px] max-w-lg p-6 rounded-md sm:p-10 bg-white text-gray-900"
          >
            <div className="mb-8 text-center">
              <p className="text-2xl font-semibold text-secondary">
                Change Your Password
              </p>
              <p className="w-[90%] mx-auto text-gray-500 text-sm">
                Enter a new password below to change your password
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-4">
                <div className="mb-4 relative">
                  <input
                    type={oldShowPassword ? "text" : "password"}
                    name="old_password"
                    id="old_password"
                    required
                    placeholder="Old password"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
                  />
                  <span
                    className="absolute top-[14px] right-4 cursor-pointer"
                    onClick={() => setOldShowPassword(!oldShowPassword)}
                  >
                    {oldShowPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                  )}
                </div>
                <div>
                  <div className="mb-4 relative">
                    <input
                      type={newShowPassword ? "text" : "password"}
                      name="new_password"
                      autoComplete="new password"
                      id="new_password"
                      required
                      placeholder="New password"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
                    />
                    <span
                      className="absolute top-[14px] right-4 cursor-pointer"
                      onClick={() => setNewShowPassword(!newShowPassword)}
                    >
                      {newShowPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-primary w-full rounded-md transform font-semibold duration-100 hover:bg-[rgb(105,182,76,0.8)] py-3 text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <TbFidgetSpinner className="animate-spin m-auto" />
                  ) : (
                    "Change Password"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center py-20">
          <div
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.06)",
            }}
            className="flex flex-col md:min-w-[400px] max-w-lg p-6 rounded-md sm:p-10 bg-white text-gray-900"
          >
            <div className="mb-8 text-center ">
              <p className="text-2xl mb-4 font-semibold text-secondary">
                Success!
              </p>
              <p className=" mx-auto text-gray-500 text-sm">
                Your password has been updated successfully
              </p>
            </div>

            <Link href={"/sign-in"}>
              <button className="bg-primary w-full rounded-md transform font-semibold duration-100 hover:bg-[rgb(105,182,76,0.8)] py-3 text-white">
                SIGN IN
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
