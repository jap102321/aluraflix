import { useRef } from "react";
import styles from "../assets/css/Movie.module.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const NewMovie = ({ updMovies }) => {
  //Refs
  const NewmovieListRef = useRef(null);
  //Function to scroll right
  const handleScrollRight = () => {
    const list = NewmovieListRef.current;
    list.scrollLeft += 780;
  };

  //Function to scroll left
  const handleScrollLeft = () => {
    const list = NewmovieListRef.current;
    list.scrollLeft -= 780;
  };

  return (
    <div className={styles.card}>
      <button
        className={`${styles.moveRight} ${styles.move}`}
        onClick={handleScrollRight}
      >
        <BsChevronRight />
      </button>

      <div className={styles.movieList} id="movieList" ref={NewmovieListRef}>
        {updMovies.map((post, index) => (
          <img src={post.Poster} alt="Poster" key={index} />
        ))}
      </div>

      <button
        className={`${styles.moveLeft} ${styles.move}`}
        onClick={handleScrollLeft}
      >
        <BsChevronLeft />
      </button>
    </div>
  );
};

export default NewMovie;
