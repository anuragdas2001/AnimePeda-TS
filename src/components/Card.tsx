import React from "react";
import {CardItem} from "./CardItem";

interface Anime {
  id: number; // Ensure there's an id field
  title: string;
  title_english: string;
  title_japanese: string;
  genres: { name: string }[];
  images: { jpg: { large_image_url: string } };
  score: number;
  status: string;
  year: number;
  episodes: number;
  type: string;
  synopsis: string;
  trailer: { url: string };
}

interface CardProps {
  animeData: Anime[];
  lastAnimeElementRef: (node: Element | null) => void;
  isDark: boolean;
}

const Card: React.FC<CardProps> = ({ animeData, lastAnimeElementRef, isDark }) => {
  return (
    <>
      {animeData.map((anime, index) => {
        if (animeData.length === index + 1) {
          return (
            <CardItem
              ref={lastAnimeElementRef}
              key={anime.id}
              id={anime.id}
              title={anime.title}
              title_english={anime.title_english}
              title_japanese={anime.title_japanese}
              genres={anime.genres}
              img={anime.images.jpg.large_image_url}
              score={anime.score}
              status={anime.status}
              year={anime.year}
              episodes={anime.episodes}
              type={anime.type}
              synopsis={anime.synopsis}
              trailer={anime.trailer.url}
              isDark={isDark}
            />
          );
        } else {
          return (
            <CardItem
              key={anime.id}
              id={anime.id}
              title={anime.title}
              title_english={anime.title_english}
              title_japanese={anime.title_japanese}
              genres={anime.genres}
              img={anime.images.jpg.large_image_url}
              score={anime.score}
              status={anime.status}
              year={anime.year}
              episodes={anime.episodes}
              type={anime.type}
              synopsis={anime.synopsis}
              trailer={anime.trailer.url}
              isDark={isDark}
            />
          );
        }
      })}
    </>
  );
};

export default Card;
