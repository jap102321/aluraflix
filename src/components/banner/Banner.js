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
      asdas
    </div>
  );
};

export default Banner;
