import Footer from "@/src/Components/Footer/Footer";
import Navbar from "@/src/Components/Navbar/Navbar";
import AuthGuard from "@/src/lib/Provider/AuthGuard";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <AuthGuard>
        <div className="sticky z-50 top-0 bg-white">
          <Navbar />
        </div>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </AuthGuard>
    </section>
  );
}
