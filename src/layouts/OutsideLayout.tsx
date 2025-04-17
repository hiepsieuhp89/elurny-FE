import { OutsideLayoutContext } from "@/contexts/OutsideLayoutContext";
import { Suspense, useContext } from "react";
import { Outlet } from "react-router-dom";

const OutsideLayout = () => {
  const { title } = useContext(OutsideLayoutContext);

  return (
    <div className="w-full h-screen flex flex-col justify-center overflow-hidden text-left text-base text-black">
      <header className="fixed top-0 left-0 w-full h-20 bg-white shadow-md flex items-center justify-between px-8 z-50">
        <img className="w-[116px]" alt="" src="/logoBrand.svg" />
        <h1 className="text-base font-semibold text-[#5d5d5d]">{title}</h1>
      </header>
      <div className="mt-20 w-full overflow-auto flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default OutsideLayout;
