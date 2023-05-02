import { search } from "../../api/Api";
import Categories from "../../pages/Categories";

import styles from "./MovieRoulette.module.css";
import { useState, useEffect } from "react";

const MovieRoulette = ({ url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    search(url, setMovies);
  }, [url]);

  return (
    <div className={styles.roulette}>
      <Categories movieList={movies.map((mov) => mov.categories)} />
    </div>
  );
};

export default MovieRoulette;
