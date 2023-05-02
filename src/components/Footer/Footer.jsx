import styles from "./Footer.module.css";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="AluraFlix Logo" />
      </div>
    </footer>
  );
};

export default Footer;
