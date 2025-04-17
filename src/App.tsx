import "./App.css";

import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
