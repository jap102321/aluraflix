import styles from "../../assets/css/AddElements.module.css";

const NewVideo = () => {
  return (
    <div className={styles.addNewContent}>
      <div className={styles.inputBox}>
        <div className={styles.input}>
          <label htmlFor="title">Titulo</label>
          <input id="title" className={styles.input} type="text" />
        </div>
      </div>
      <div className={styles.inputBox}>
        <div className={styles.input}>
          <label htmlFor="categoria">Categoria</label>
          <input id="categoria" className={styles.input} type="text" />
        </div>
      </div>
      <div className={styles.inputBox}>
        <div className={styles.input}>
          <label htmlFor="poster">Poster / Imagen</label>
          <input id="poster" className={styles.input} type="text" />
        </div>
      </div>
      <div className={styles.inputBox}>
        <div className={styles.input}>
          <label htmlFor="releaseDate">Año de salida</label>
          <input id="releaseDate" className={styles.input} type="text" />
        </div>
      </div>
      <div className={styles.inputBox}>
        <div className={styles.input}>
          <label htmlFor="trailer">Trailer</label>
          <input id="trailer" className={styles.input} type="text" />
        </div>
      </div>
    </div>
  );
};

export default NewVideo;
