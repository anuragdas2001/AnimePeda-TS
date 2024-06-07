import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Manga } from "./components/Manga";
import { Genre } from "./components/Genre";
import { GenreItems } from "./components/GenreItem";
import { StreamAnime } from "./components/StreamAnime";
import { SplashScreen } from "./components/SplashScreen";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import { Favourite } from "./components/Favourite";
import { Profile } from "./components/Profile";
export const router = createBrowserRouter([
  { path: "/", element: <SplashScreen /> },

  {
    path: "/",
    element: <Navbar />,
    children: [
      //   { path: "/", element: <SplashScreen /> },
      { path: "/home", element: <Home /> },
      { path: "/manga", element: <Manga /> },
      { path: "/genre", element: <Genre /> },
      { path: "/genreItems/:genre", element: <GenreItems /> },
      { path: "/favourites", element: <Favourite /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  { path: "/", element: <SplashScreen /> },
  { path: "/StreamAnime/:anime/:episode", element: <StreamAnime /> },
  { path: "/signup", element: <Registration /> },
  { path: "/login", element: <Login /> },
]);
