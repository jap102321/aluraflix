import styles from "../../assets/css/AddElements.module.css";

const NewCategory = () => {
  return (
    <div className={styles.addNewContent}>
      <div className={styles.inputBox}>
        <div className={styles.input}>
          <label htmlFor="title">Titulo de la categoria</label>
          <input id="title" className={styles.input} type="text" />
        </div>
      </div>
      <div className={styles.inputBox}>
        <div className={`${styles.input} ${styles.input__desc}`}>
          <label htmlFor="title">Descripción categoria</label>
          <input id="title" className={styles.input} type="text" />
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
