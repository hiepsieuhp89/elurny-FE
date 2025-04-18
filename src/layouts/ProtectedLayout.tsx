import { Suspense } from "react";
import {
  LoaderFunction,
  Outlet,
} from "react-router-dom";



export default function ProtectedLayout() {
  return (
    <div className="w-full h-full flex bg-mainDarkBackgroundV1" id="kt_app_root">
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
  // if (!token || token === "EXPIRED") {
  //   return redirect("/auth/login");
  // }
  
  return null;
};
