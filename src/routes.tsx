import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
]);
