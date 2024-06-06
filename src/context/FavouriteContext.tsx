import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mvoltmxzeywbmfdgasdu.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12b2x0bXh6ZXl3Ym1mZGdhc2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMjg5MDAsImV4cCI6MjAzMTgwNDkwMH0.rsvLTGJvoA4x7XHMiwaFq8jMZk0cJO9PIG5SWpTBnWQ";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

interface CardItemProps {
    title: string;
    title_english: string;
    title_japanese: string;
    genres: { name: string }[];
    img: string;
    score: number;
    status: string;
    year: number;
    episodes: number;
    type: string;
    synopsis: string;
    trailer: string;
    isDark: boolean;
}

interface FavouriteContextType {
  favourites: CardItemProps[];
  handleFavourite: (item: CardItemProps) => void;
}

const FavouriteContext = createContext<FavouriteContextType | undefined>(undefined);

export const FavouriteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favourites, setFavourites] = useState<CardItemProps[]>([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const { data, error } = await supabase.from("favourites").select("*");
        if (error) {
          console.error("Error fetching favourites:", error);
        } else {
          setFavourites(data);
        }
      } catch (err) {
        console.error("Error fetching favourites:", err);
      }
    };

    fetchFavourites();
  }, []);

  const handleFavourite = async (item: CardItemProps) => {
    try {
      const { error } = await supabase.from("favourites").insert([item]);
      if (error) {
        console.error("Error inserting favourite:", error);
      } else {
        setFavourites((prevFavourites) => [...prevFavourites, item]);
      }
    } catch (err) {
      console.error("Error inserting favourite:", err);
    }
  };

  return (
    <FavouriteContext.Provider value={{ favourites, handleFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export function useFavourite(): FavouriteContextType {
  const context = useContext(FavouriteContext);
  if (context === undefined) {
    throw new Error("useFavourite must be used within a FavouriteProvider");
  }
  return context;
}
