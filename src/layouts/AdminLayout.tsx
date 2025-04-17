import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@/components/Common/Sidebar";
import MobileMenu from "@/components/Common/MobileMenu";
import { useMobile } from "@/hooks/useMobile";

function AdminLayout(): React.ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMobile(768);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-backgroundColorV1">
        <motion.div
          className="w-16 h-16 border-t-4 border-b-4 border-mainColorV1 rounded-full animate-spin"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <div className={`${isMobile ? 'overflow-x-hidden' : ''} min-h-screen bg-backgroundColorV1`}>
      {!isMobile && <Sidebar />}
      
      {isMobile && <MobileMenu />}
      
      <div className={`flex flex-col ${!isMobile ? 'lg:pl-20' : ''}`}>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout; 