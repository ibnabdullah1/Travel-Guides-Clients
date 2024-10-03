"use client";
import DashboardNavbar from "@/src/Components/Dashboard/DashboardNavbar";
import Sidebar from "@/src/Components/Dashboard/Sidebar/Sidebar";
import AuthGuard from "@/src/lib/Provider/AuthGuard";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isActive, setActive] = useState(true);

  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="relative bg-gray-50 min-h-screen lg:flex font-questrial gap-5">
      <AuthGuard>
        <Sidebar isActive={isActive} />
        <div className="flex-1 bg-gray-50 lg:ml-64">
          <DashboardNavbar handleToggle={handleToggle} isActive={isActive} />
          <div className="max-w-4xl mx-auto py-14 px-5 md:px-8 lg:px-0">
            {children}
          </div>
        </div>
      </AuthGuard>
    </div>
  );
}
