// "use client";

// import { selectCurrentUser } from "@/src/redux/features/auth/authSlice";
// import { RootState } from "@/src/redux/features/store";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

// const AuthGuard = ({ children }: { children: React.ReactNode }) => {
//   const user = useSelector((state: RootState) => selectCurrentUser(state));
//   const router = useRouter();
//   useEffect(() => {
//     if (!user) {
//       router.push("/sign-in");
//     }
//   }, [user, router]);

//   if (!user) {
//     return null;
//   }

//   return <>{children}</>;
// };

// export default AuthGuard;
"use client";

import Loading from "@/src/Components/Common/Loading";
import { selectCurrentUser } from "@/src/redux/features/auth/authSlice";
import { RootState } from "@/src/redux/features/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isPageReloaded, setIsPageReloaded] = useState(false);

  useEffect(() => {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      setIsPageReloaded(true);
    }
  }, []);

  useEffect(() => {
    if (isPageReloaded) {
      if (!user && !loading) {
        router.push("/sign-in");
      } else {
        setLoading(false);
      }
    } else if (user) {
      setLoading(false);
    }
  }, [user, router, isPageReloaded, loading]);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default AuthGuard;
