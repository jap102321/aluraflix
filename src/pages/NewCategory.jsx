import styles from "../assets/css/Categories.module.css";
import NewMovie from "./NewMovie";

const NewCategories = ({ updMovieList }) => {
  return (
    <div>
      {updMovieList &&
        updMovieList.map((data) => (
          <div className={styles.movieCategory} key={data.id}>
            <h2 className={styles.titleCat}>{data.nombre}</h2>
            <NewMovie updMovies={data.mov} />
          </div>
        ))}
    </div>
  );
};

export default NewCategories;
