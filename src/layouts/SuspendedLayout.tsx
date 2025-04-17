import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function SuspendedLayout() {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
}

export default SuspendedLayout;
