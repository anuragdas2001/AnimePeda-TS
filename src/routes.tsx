import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children:[
      {path: "/", element: <Home />},

    ]
  },
]);
