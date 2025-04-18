import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout() {
  return (
    <div className="h-full min-h-screen bg-mainDarkBackgroundV1">
      <main className="h-full flex bg-[url('/images/main-bg.svg')]">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}
