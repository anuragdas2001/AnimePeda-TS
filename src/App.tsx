import React from "react";
// import { Navbar } from "./components/Navbar";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
const App: React.FC = () => {
  return <>
    {/* <Navbar/> */}
  <RouterProvider router={router}/>
  </>;
};

export default App;
