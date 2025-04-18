import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import LoadingSpinner from "@/components/Common/LoadingSpinner";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const OutsideLayout = () => {
  return (
    <div className="w-full bg-mainDarkBackgroundV1">
    <Suspense fallback={<LoadingSpinner />}>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  </div>
  );
};

export default OutsideLayout;
