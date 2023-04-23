import styles from "./Header.module.css";
import logo from "../../assets/logo/logo.png";
import Button from "../button/Button.js";

const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <img src={logo} alt="Possibly a logo " />
      <Button description="Nuevo video" />
    </div>
  );
};

export default Header;
