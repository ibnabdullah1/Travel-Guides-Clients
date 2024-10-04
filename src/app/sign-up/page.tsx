"use client";
import { useRegisterMutation } from "@/src/redux/features/auth/authApi";
import { imageUpload } from "@/src/utils/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [register] = useRegisterMutation();
  const router = useRouter();

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const image = form.image.files[0];

    setPasswordError("");
    setEmailError("");

    try {
      const { data } = await imageUpload(image);
      const photoUrl = data?.display_url;

      const userInfo = {
        name,
        email,
        role: "USER",
        password,
        isDeleted: false,
        mobileNumber: "1234567890",
        profilePhoto: photoUrl,
        isPremium: false,
        follower: [],
        following: [],
      };
      const res: any = await register(userInfo).unwrap();
      if (res.success) {
        toast.success(res.message);
        form.reset();
        router.push("/sign-in");
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.06)" }}
        className="flex flex-col md:min-w-[400px] max-w-lg p-6 rounded-md sm:p-10 bg-white text-gray-900"
      >
        <div className="mb-8 text-center">
          <h1 className="my-3 text-2xl text-gray-800 font-bold">Sign Up</h1>
          <p className="text-xl font-semibold text-gray-600">
            Welcome to <span className="text-primary">Travel Guide</span>
          </p>
        </div>
        <form
          onSubmit={handleRegister}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
              />
            </div>
            <div>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
              />
              {emailError && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.8rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {emailError}
                </p>
              )}
            </div>
            <div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
                />
                <span
                  className="absolute top-[14px] right-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {passwordError && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.8rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {passwordError}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-primary w-full rounded-md transform font-semibold duration-100 hover:bg-[rgb(105,182,76,0.8)] py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
            <button className="text-xs hover:underline hover:text-primary text-gray-400">
              Forgot password?
            </button>
          </div>

          <p className="px-6 mt-3 text-sm text-center text-gray-400">
            Don’t have an account?
            <Link
              href="/sign-in"
              className="hover:underline font-semibold hover:text-primary text-primary"
            >
              Sign In
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
