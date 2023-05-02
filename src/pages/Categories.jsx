import styles from "../assets/css/Categories.module.css";
import Movie from "./Movie";
import { useState, useEffect } from "react";

const Categories = ({ movieList, id }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    movieList.map((cat) => setCategories(cat));
  });

  return (
    <div>
      {categories.map((resp) => (
        <div className={styles.movieCategory} key={resp.id}>
          <h2 className={styles.titleCat}>{resp.nombre}</h2>
          <Movie movies={resp.mov} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
