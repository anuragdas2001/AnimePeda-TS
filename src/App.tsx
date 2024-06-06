import React from "react";
// import { Navbar } from "./components/Navbar";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import { FavouriteProvider } from "./context/FavouriteContext";
const App: React.FC = () => {
  return (
    <>
      <DarkModeProvider>
        <FavouriteProvider>
          <RouterProvider router={router} />
        </FavouriteProvider>
      </DarkModeProvider>
    </>
  );
};

export default App;
