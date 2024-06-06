import React from "react";
import { useFavourite } from "../context/FavouriteContext";
import { createClient } from "@supabase/supabase-js";
export const Favourite: React.FC = () => {
  const { favourites } = useFavourite();
  console.log(favourites);
//   const SUPABASE_URL = "https://mvoltmxzeywbmfdgasdu.supabase.co";
//   const SUPABASE_ANON_KEY =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12b2x0bXh6ZXl3Ym1mZGdhc2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMjg5MDAsImV4cCI6MjAzMTgwNDkwMH0.rsvLTGJvoA4x7XHMiwaFq8jMZk0cJO9PIG5SWpTBnWQ";
//   const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

//   // Create a function to handle inserts
//   const handleInserts = (payload:any) => {
//     console.log("Change received!", payload);
//   };

//   // Listen to inserts
//   supabase
//     .channel("todos")
//     .on(
//       "postgres_changes",
//       { event: "INSERT", schema: "public", table: "todos" },
//       handleInserts
//     )
//     .subscribe();
  return (
    <>
      <div>
        {favourites.length > 0 ? (
          favourites.map((favourite, index) => (
            <div
              key={index}
              className="card h-80 card-side mb-2 p-3 transform transition-transform duration-300"
            >
              <img
                src={favourite.img}
                alt={favourite.title_english}
                className="w-40 h-full object-fill rounded-md"
              />
              <div className="card-body flex flex-col justify-between">
                <div>
                  <h2 className="card-title text-sm">
                    {favourite.title_english}
                  </h2>
                  <p className="text-xs mb-4">{favourite.synopsis}</p>
                  <div className="text-xs font-semibold">
                    {favourite.genres.length > 0 && (
                      <p>
                        Genre: {favourite.genres.map((g) => g.name).join(", ")}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-start items-start text-xs font-semibold">
                    {favourite.type}
                  </div>
                  <div className="flex justify-start items-start text-xs font-semibold">
                    ⭐ {favourite.score}
                  </div>
                  <div className="flex justify-start items-start text-xs font-semibold">
                    {favourite.status}
                  </div>
                  <div className="flex justify-start items-start text-xs font-semibold">
                    Episodes: {favourite.episodes}
                  </div>
                  <div className="flex justify-start items-start text-xs font-semibold">
                    Japanese title: {favourite.title_japanese}
                  </div>
                  <div className="flex justify-start items-start text-xs font-semibold">
                    {favourite.year}
                  </div>
                </div>
                <div className="flex justify-end space-x-2 text-black">
                  <a
                    href={favourite.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className=" h-10 w-auto  bg-cyan-500 rounded-md text-sm p-2">
                      Watch Trailer
                    </button>
                  </a>
                  <a
                    href={`/StreamAnime/${favourite.title}/episode-${1}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className=" h-10 w-auto  bg-lime-500 rounded-md text-sm p-2">
                      Watch Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="covered-by-your-grace-regular text-center mt-5 text-3xl">
            <h1>
              Your favorites list is empty. Start exploring and add some
              favorites !
            </h1>
            <div className="float-right">
              <img src="/Yorichi.png" alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
