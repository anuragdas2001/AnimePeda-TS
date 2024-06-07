import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { supabase } from "../supabase/supabaseClient";

interface CardItemProps {
  id?: number; // Make id optional
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
  handleRemoveFavourite: (id: number) => void;
}

const FavouriteContext = createContext<FavouriteContextType | undefined>(
  undefined
);

export const FavouriteProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
    const itemWithoutId = { ...item };
    delete itemWithoutId.id; // Remove the id field

    try {
      const { error } = await supabase
        .from("favourites")
        .insert([itemWithoutId]);
      if (error) {
        console.error("Error inserting favourite:", error);
      } else {
        setFavourites((prevFavourites) => [...prevFavourites, item]);
      }
    } catch (err) {
      console.error("Error inserting favourite:", err);
    }
  };

  const handleRemoveFavourite = async (id: number) => {
    console.log("Inside handleRemoveFavourite");
    try {
      const { error } = await supabase.from("favourites").delete().eq("id", id);
      if (error) {
        console.error("Error removing favourite:", error);
      } else {
        setFavourites((prevFavourites) =>
          prevFavourites.filter((item) => item.id !== id)
        );
      }
    } catch (err) {
      console.error("Error removing favourite:", err);
    }
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, handleFavourite, handleRemoveFavourite }}
    >
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
