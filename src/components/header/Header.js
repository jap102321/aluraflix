import styles from "./Header.module.css";
import logo from "../../assets/logo/logo.png";
import Button from "../button/Button.js";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <Link to="/aluraflix">{<img src={logo} alt="Possibly a logo " />}</Link>
      <Link to="/new/video">
        <Button description="Nuevo vídeo" />
      </Link>
    </div>
  );
};

export default Header;
