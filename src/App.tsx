import React from "react";
// import { Navbar } from "./components/Navbar";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
const App: React.FC = () => {
  return (<>
   
    <DarkModeProvider>
      <RouterProvider router={router}/>
    </DarkModeProvider>
  
  </>);
};

export default App;
