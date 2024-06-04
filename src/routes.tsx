import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Manga } from "./components/Manga";
import { Genre } from "./components/Genre";
import { GenreItems } from "./components/GenreItem";
import { StreamAnime } from "./components/StreamAnime";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/manga", element: <Manga /> },
      { path: "/genre", element: <Genre /> },
      { path: "/genreItems/:genre", element: <GenreItems /> },

    ],
  },
  { path: "/StreamAnime/:anime/:episode", element: <StreamAnime /> },
]);
