import React from "react";
import { useFavourite } from "../context/FavouriteContext";

export const Favourite: React.FC = () => {
  const { favourites, handleRemoveFavourite } = useFavourite();

  return (
    <div className="container mx-auto px-4">
      {favourites.length > 0 ? (
        favourites.map((favourite) => (
          <div
            key={favourite.id}
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
              <div className="absolute mt-52 ml-72 flex justify-end space-x-2 text-black">
                <button
                  onClick={() =>
                    favourite.id !== undefined &&
                    handleRemoveFavourite(favourite.id)
                  }
                  className=" h-10 w-auto bg-red-500 rounded-md text-sm p-2"
                >
                  Remove from favourites
                </button>
                <a
                  href={favourite.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="h-10 w-auto bg-cyan-500 rounded-md text-sm p-2">
                    Watch Trailer
                  </button>
                </a>
                <a
                  href={`/StreamAnime/${favourite.title}/episode-1`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="h-10 w-auto bg-lime-500 rounded-md text-sm p-2">
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
            Your favourites list is empty. Start exploring and add some
            favourites!
          </h1>
          <div className="float-right">
            <img src="/Yorichi.png" alt="Empty favourites" />
          </div>
        </div>
      )}
    </div>
  );
};
