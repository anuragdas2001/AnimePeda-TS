// src/hooks/useAuth.ts

import { useState } from "react";
import { supabase } from "./supabaseClient";

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return null;
    }

    setUser(data.user);
    return data.user;
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return null;
    }

    setUser(data.user);
    return data.user;
  };

  return {
    user,
    error,
    signUp,
    signIn,
  };
};
