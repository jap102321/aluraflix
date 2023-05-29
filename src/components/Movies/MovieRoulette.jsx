import { search } from "../../api/Api";
import Categories from "../../pages/Categories";

import styles from "./MovieRoulette.module.css";
import { useState, useEffect } from "react";

const MovieRoulette = ({ url }) => {
  const [movies, setMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  useEffect(() => {
    search(url, setMovies);
    search("/updatableMovies", setNewMovies);
  }, []);

  return (
    <div className={styles.roulette}>
      <Categories
        movieList={movies.map((mov) => mov.categories)}
        updMovieList={newMovies.map((mov) => mov)}
      />
    </div>
  );
};

export default MovieRoulette;
