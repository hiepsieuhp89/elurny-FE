import { motion } from "framer-motion";
import React, { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useMobile } from "@/hooks/useMobile";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import LoadingSpinner from "@/components/Common/LoadingSpinner";
function MainLayout(): React.ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMobile(768);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`${isMobile ? 'overflow-x-hidden' : ''} fixed inset-0 flex items-center justify-center bg-backgroundColorV1`}>
        <motion.div
          className="w-16 h-16 border-t-4 border-b-4 border-mainColorV1 rounded-full animate-spin"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <div className="w-full bg-mainDarkBackgroundV1">
        <Suspense fallback={<LoadingSpinner />}>
          <Header />
          <Outlet />
          <Footer />
        </Suspense>
      </div>
  );
}

export default MainLayout; 