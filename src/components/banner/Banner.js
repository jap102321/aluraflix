import styles from "./Banner.module.css";
import banner from "../../assets/banner.jpeg";
const Banner = () => {
  return (
    <div
      className={styles.bannerDiv}
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className={styles.dataInside}>
        <div className={styles.description}>
          <p>
            La vida de Desmond Doss quien se enlista en el ejército durante la
            Segunda Guerra Mundial a pesar de rehusarse a disparar un arma.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
