import { Suspense,useEffect, useState } from "react";
import {
  LoaderFunction,
  Outlet,
  useLoaderData,
  useSubmit,
} from "react-router-dom";

import { getAuthToken, getTokenDuration } from "@/utils/auth";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleOpenSideBar: () => void;
  user: any; // Adjust the type according to your user data structure
}

export default function ProtectedLayout() {
  const submit = useSubmit();
  const user = useLoaderData();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleOpenSideBar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-full flex bg-white" id="kt_app_root">
      <div className="flex-1 flex flex-col h-full">
        <div className="flex flex-col">
         
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export const loader: LoaderFunction = async () => {
  const token = getAuthToken();

  // if (!token || token === "EXPIRED") {
  //   return redirect("/auth/login");
  // }
  
  return null;
};
