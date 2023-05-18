import { useEffect, useState, createContext } from "react";
import { search } from "./Api";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [cat, setCat] = useState();

  const url = "/movies";
  useEffect(() => {
    search(url, setCat);
  }, []);

  const movies = {
    movie: cat,
  };

  return <ApiContext.Provider value={movies}>{children}</ApiContext.Provider>;
};
