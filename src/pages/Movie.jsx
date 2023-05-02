import { useEffect, useState } from "react";
import styles from "../assets/css/Movie.module.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
const Movie = ({ movies }) => {
  const [avaiMovies, setMovies] = useState([]);
  useEffect(() => {
    movies.map((mov) => setMovies(mov));
  });

  const addStyling = (e) => {
    console.log(e.target);
  };

  return (
    <div className={styles.card}>
      <button className={`${styles.moveRight} ${styles.move}`}>
        <BsChevronRight />
      </button>
      <div className={styles.movieList}>
        {movies.map((post, index) => (
          <img src={post.Poster} alt="Poster" key={index} />
        ))}
      </div>
      <button className={`${styles.moveLeft} ${styles.move}`}>
        <BsChevronLeft />
      </button>
    </div>
  );
};

export default Movie;
