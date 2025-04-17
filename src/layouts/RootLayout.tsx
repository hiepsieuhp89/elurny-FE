import { useEffect } from "react";
import { Outlet, useSubmit } from "react-router-dom";

import { getTokenDuration } from "@/utils/auth";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout() {
  const submit = useSubmit();
  return (
    <div className="h-full min-h-screen">
      <main className="h-full flex bg-[url('/images/main-bg.svg')]">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}
